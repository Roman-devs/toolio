package de.roman.toolio.security;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Document(collection = "securityCredentials")
public class UserSecurityCredentials {
    @Id
    private String username; // Linked to AppUser
    private String password;
}
