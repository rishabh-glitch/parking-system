package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Vehicle;
import com.example.demo.exception.DuplicateVehicleException;
import com.example.demo.exception.NoSuchVehicleException;
import com.example.demo.service.VehicleService;


@CrossOrigin("*")
@RestController
@RequestMapping("vehicles")
public class VehicleController {
	@Autowired
	VehicleService service;
	@PostMapping("/add")
	public ResponseEntity<String> addUsersVehicle(@RequestBody Vehicle vehicle) throws DuplicateVehicleException {
		service.addUsersVehicle(vehicle);
		return new ResponseEntity<String>("Added", HttpStatus.CREATED);
	}
	@GetMapping("/users/{userId}")
	public List<Vehicle> fetchAllVehiclesByUserId(@PathVariable int userId) {
		return service.findAllVehiclesByUserId(userId);
	}
	@GetMapping("/{vehicleNumber}/users/{userId}")
		public Vehicle fetchVehicleByVehicleNumberAndUserId(@PathVariable String vehicleNumber,@PathVariable int userId) throws NoSuchVehicleException 
		{
			return service.findVehicleByVehicleNumber(vehicleNumber, userId);
		}
	@DeleteMapping("/users/{Id}")
	public ResponseEntity<String> removeUsersVehicle(@PathVariable Integer Id) throws NoSuchVehicleException {
		service.removeVehicleByVehicleNumber(Id);
		return new ResponseEntity<String>("Vehicle removed successfully", HttpStatus.OK);
	}
	@PutMapping 
	public ResponseEntity<String> modifyUsersVehicle(@RequestBody Vehicle vehicle) {
		service.modifyVehicle(vehicle);
		return new ResponseEntity<String>("Vehicle details updated", HttpStatus.OK);
	}
	@GetMapping("/users")
	public List<Vehicle> getAllVehicles(){
		return service.getAllVehicle();
	}
}
