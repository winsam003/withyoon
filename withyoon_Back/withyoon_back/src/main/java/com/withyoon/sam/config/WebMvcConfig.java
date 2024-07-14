package com.withyoon.sam.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebMvcConfig implements WebMvcConfigurer{
	
	@Override
	public void addViewControllers(ViewControllerRegistry registry) {
		registry.addViewController("/").setViewName("redirect:/home");
	}
	
	private final long MAX_AGE_SECS = 3600;
	
	@Override
	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/**")
								.allowedOrigins("http://localhost:3000")
								.allowedMethods("GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS")
								.allowedHeaders("*")
								.allowCredentials(true)
								.maxAge(MAX_AGE_SECS);
		
	}
}
