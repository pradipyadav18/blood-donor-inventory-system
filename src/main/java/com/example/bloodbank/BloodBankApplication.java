package com.example.bloodbank;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BloodBankApplication {
    public static void main(String[] args) {
    	System.out.println("The application start ...");
    	
    	
        SpringApplication.run(BloodBankApplication.class, args);
        
        System.out.println("The application is ended...");
    }
}
