package de.roman.toolio;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@SpringBootApplication
@EnableConfigurationProperties
public class ToolioApplication {
    public static void main(String[] args) {
        SpringApplication.run(ToolioApplication.class, args);
    }
}
