package com.message;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;

import com.message.service.EmailService;

@SpringBootApplication
public class MessageServiceApplication {
	
	@Autowired
	private EmailService mailService; //Autowiring the mailService


	public static void main(String[] args) {
		SpringApplication.run(MessageServiceApplication.class, args);
	}
	
	@EventListener(ApplicationReadyEvent.class)
	public void triggerMail() {                             //Load the method with requirement.
		mailService.sendMail("pavanrajsh9@gmail.com",
				"Reserved property", 
				"The below person has reserved a property : \n"
				+ "Id : 1"+"\n"
				+ "Name : Manoj"+"\n"
				+ "Reserved Property : Calangute Delite, Goa");
	}


}
