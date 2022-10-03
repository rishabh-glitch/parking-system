package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.ParkingFloor;
import com.example.demo.entity.ParkingPremise;
import com.example.demo.exception.DuplicateParkingFloorException;
import com.example.demo.exception.DuplicateParkingPremiseException;
import com.example.demo.exception.NoSuchParkingFloorException;
import com.example.demo.exception.NoSuchParkingPremiseException;
import com.example.demo.service.AdminServices;
@CrossOrigin("*")
@RestController
public class AdminController {
	
	@Autowired
	private AdminServices parkingservice;
	
	@PostMapping("/savePremise")
	public String saveParkingPremise(@RequestBody @Valid ParkingPremise parkingpremise) throws DuplicateParkingPremiseException
	{
		parkingservice.addParkingPremise(parkingpremise);
		return "saved";
	}
	
	@PostMapping("/saveFloor")
	public String saveFloor(@RequestBody @Valid ParkingFloor parkingfloor) throws DuplicateParkingFloorException
	{
		parkingservice.addParkingFloor(parkingfloor);
		return "saved";
	}	
	
	@GetMapping("/getPremiseById/{id}")
	public Optional<ParkingPremise> getPremiseById(@PathVariable int id) throws NoSuchParkingPremiseException
	{
		return parkingservice.getParkingPremiseById(id);
	}
	
	@GetMapping("/getAllPremise")
	public List<ParkingPremise> getAllPremise()
	{
		return parkingservice.getAllParkingPremises();
	}
	
	@GetMapping("getFloorById/{id}")
	public Optional<ParkingFloor> getParkingFloorById(@PathVariable int id) throws NoSuchParkingFloorException
	{
		return parkingservice.getParkingFloorById(id);
	}
	
	@GetMapping("/getAllFloors")
	public List<ParkingFloor> getAllFloors()
	{
		
		return parkingservice.getAllParkingFloors();
	}
	
	@GetMapping("getPremiseByName/{name}")
	public List<ParkingPremise> getPremiseByName(@PathVariable String name) throws NoSuchParkingPremiseException
	{
		return parkingservice.getParkingPremiseByName(name);
	}
	
	@GetMapping("getFloorByNumber/{id}/{number}")
	public List<ParkingFloor> getParkingFloorByNumber(@PathVariable int id, @PathVariable String number) throws NoSuchParkingFloorException
	{
		return parkingservice.getParkingFloorByNumber(id, number);
	}
}
