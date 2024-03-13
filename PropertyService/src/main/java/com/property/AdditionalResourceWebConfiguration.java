package com.property;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
@Configuration
public class AdditionalResourceWebConfiguration implements WebMvcConfigurer{
	
	/*Configure ResourceHandlers to serve static resources like CSS/ Javascript etc...*/
	public void addResourceHandlers(ResourceHandlerRegistry registry) {
		System.out.println("add resource");
		registry.addResourceHandler("/images/**").addResourceLocations("/propimages/");
	}
	@Override
	public void addCorsMappings(final CorsRegistry registry) {
	    registry.addMapping("/**")
	        .allowedOrigins("*")
	        .allowedMethods("POST", "GET", "PUT", "DELETE");
	        //.allowedHeaders("header1", "header2", "header3")
	        //.exposedHeaders("header1", "header2")
	       // .allowCredentials(true).maxAge(3600);
	}

}
