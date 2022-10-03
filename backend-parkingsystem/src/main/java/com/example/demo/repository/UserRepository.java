package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Owner;

@Repository
public interface UserRepository extends JpaRepository<Owner,Integer>{
	@Query(value = "SELECT * FROM owner s WHERE s.email=?1 and s.password=?2", nativeQuery = true)
	public Owner findUser(String email, String pass);
}
