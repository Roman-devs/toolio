package de.roman.toolio.model;

import org.springframework.stereotype.Service;

import java.util.UUID;
@Service
public class UuidGenerator {
    public String generateRandomUuid(){
        return UUID.randomUUID().toString();
    }
}
