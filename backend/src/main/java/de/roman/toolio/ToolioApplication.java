package de.roman.toolio;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
@EnableConfigurationProperties
public class ToolioApplication extends SpringBootServletInitializer {
    public static void main(String[] args) {
        SpringApplication.run(ToolioApplication.class, args);
    }
}
