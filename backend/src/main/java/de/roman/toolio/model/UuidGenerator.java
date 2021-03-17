package de.roman.toolio.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class UuidGenerator {
    public String generateRandomUuid(){
        return UUID.randomUUID().toString();
    }
}
