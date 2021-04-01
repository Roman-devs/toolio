package de.roman.toolio.controller;

import com.sun.jna.platform.win32.Netapi32Util;
import de.roman.toolio.security.UserSecurityCredentials;
import de.roman.toolio.security.UserSecurityCredentialsDb;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import org.hamcrest.Matchers;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.context.TestPropertySource;

import static org.hamcrest.MatcherAssert.assertThat;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@TestPropertySource(properties = "security.jwt.secret=supertestsecret")
public class LoginControllerTest {
    @LocalServerPort
    private int port;

    private String getUrl() {
        return "http://localhost:" + port + "auth/login";
    }


    @Autowired
    private UserSecurityCredentialsDb userSecurityCredentialsDb;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private TestRestTemplate restTemplate;

    @Test
    public void loginWithValidCredentialsShouldGenerateJwtToken() {
        //GIVEN
        String username = "Max";
        String password = "MaxMustermann";

        String encode = passwordEncoder.encode(password);
        userSecurityCredentialsDb.save(UserSecurityCredentials.builder().username(username).password(encode).build());

        //WHEN
        ResponseEntity<String> response = restTemplate.postForEntity(getUrl(), new UserSecurityCredentials(username, password), String.class);

        //THEN
        assertThat(response.getStatusCode(), Matchers.is(HttpStatus.OK));
        Claims claims = Jwts.parser().setSigningKey("supertestsecret").parseClaimsJws(response.getBody()).getBody();
        assertThat(claims.getSubject(), Matchers.is("Max"));
    }

    @Test
    public void loginWithInValidCredentialsShouldGenerateJwtToken() {
        //GIVEN
        String username = "Max";
        String password = "superPassword";

        String encode = passwordEncoder.encode(password);
        userSecurityCredentialsDb.save(UserSecurityCredentials.builder().username(username).password(encode).build());


        //WHEN
        ResponseEntity<String> response = restTemplate.postForEntity(getUrl(), new UserSecurityCredentials(username, "wrong password"), String.class);

        //THEN
        assertThat(response.getStatusCode(), Matchers.is(HttpStatus.BAD_REQUEST));

    }
}
