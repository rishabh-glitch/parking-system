package com.example.demo.controller;

import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Owner;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.UserService;
@CrossOrigin("*")
@RestController
public class UserController {
	@Autowired
	private UserService userserv;
	@Autowired
	private UserRepository userRepository;
	@PostMapping("/saveUser")
	
	public String saveUser(@RequestBody Owner owner) {
		if(owner.getEmail()=="admin")
		{
			return "cannot save";
		}
		else
		{			
			userserv.saveUser(owner);
			return "saved";
		}
	}
	
	@PostMapping("/login")
	public String login(@RequestBody Owner user) {
		Owner authuser=userRepository.findUser(user.getEmail(), user.getPassword());
		String a = authuser.getEmail();
		String b = "admin@123";
		if(a.equals(b))
		{
			return "logged in as a admin";
		}
		if(Objects.nonNull(authuser))
		{
			return "logged in";
		}
		else {
			return "failed";
		}
	}
	
}
