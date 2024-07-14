package com.withyoon.sam.home;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/home")
public class homeController {
	
	@GetMapping("/home")
	public String test() {
		System.out.println("TEST");
		return "성공인가요?";
	}

}
