package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Owner;
import com.example.demo.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService{
	@Autowired
	private UserRepository userrepo;

	@Override
	public void saveUser(Owner owner) {
		// TODO Auto-generated method stub
		userrepo.save(owner);
	}

}
