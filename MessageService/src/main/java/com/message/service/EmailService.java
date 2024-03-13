package com.message.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {
	
	@Autowired
	private JavaMailSender sendMail; //JavaMailSender is autowired
	
	public void sendMail(String toEmail,String subject,String body) {
		
		SimpleMailMessage message = new SimpleMailMessage();
		message.setFrom("pythonmajorproject@gmail.com"); //From mail
		message.setTo(toEmail);                      //To mail
		message.setSubject(subject);	             //Mail subject
		message.setText(body);                       //Mail body
		sendMail.send(message);                      //Mail message
		System.out.println("Mail Sent");
	}
}
