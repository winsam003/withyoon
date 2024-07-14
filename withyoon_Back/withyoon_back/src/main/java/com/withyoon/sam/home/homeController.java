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
		return "백에서보내는 메시지: 백이랑 연동은 성공했으나 근데 톰캣이 연동이 안되는 이슈가 여전함..";
	}

}
