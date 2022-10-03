package com.example.demo.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.entity.Vehicle;
import com.example.demo.exception.DuplicateVehicleException;
import com.example.demo.exception.NoSuchVehicleException;



@Service
public interface VehicleService {
	
	public boolean addUsersVehicle(Vehicle vehicle) throws DuplicateVehicleException;

	public Vehicle findVehicleByVehicleNumber(String vehicleNumber, int userId) throws NoSuchVehicleException;

	public List<Vehicle> findAllVehiclesByUserId(int ownerId);

	public boolean removeVehicleByVehicleNumber(Integer userId) throws NoSuchVehicleException;

	public Vehicle modifyVehicle(Vehicle vehicle);

	public List<Vehicle> getAllVehicle();
}

