package de.roman.toolio.security;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

@Component
public class UserSecurityCredentialsDetailsService implements UserDetailsService {
    private final UserSecurityCredentialsDb userSecurityCredentialsDb;

    @Autowired
    public UserSecurityCredentialsDetailsService(UserSecurityCredentialsDb userSecurityCredentialsDb){
        this.userSecurityCredentialsDb = userSecurityCredentialsDb;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException{
        UserSecurityCredentials userSecurityCredentials = this.userSecurityCredentialsDb
                .findById(username)
                .orElseThrow(() -> new UsernameNotFoundException("User does not exist: "+username));
        return User.builder()
                .username(username)
                .password(userSecurityCredentials.getPassword())
                //.authorities("user")
                .build();
    }
}
