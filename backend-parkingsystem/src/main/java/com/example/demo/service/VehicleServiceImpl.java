package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Owner;
import com.example.demo.entity.Vehicle;
import com.example.demo.exception.DuplicateVehicleException;
import com.example.demo.exception.NoSuchParkingSlotException;
import com.example.demo.exception.NoSuchVehicleException;
import com.example.demo.repository.VehicleRepository;



@Service
public class VehicleServiceImpl implements VehicleService{
	
	@Autowired
	private VehicleRepository vehicleDao;
	@Override
	public boolean addUsersVehicle(Vehicle vehicle) throws DuplicateVehicleException{
		
		vehicleDao.saveAndFlush(vehicle);
		return true;
	}
	@Override
	public Vehicle findVehicleByVehicleNumber(String vehicleNumber, int userId) throws NoSuchVehicleException{
		Vehicle userVehicle = vehicleDao.findByVehicleNumberAndOwnerUserId(vehicleNumber, userId);
		if(userVehicle == null)
			throw new NoSuchVehicleException("No Vehicle found for Vehicle Number " + vehicleNumber);
		return userVehicle;
	}
	@Override 
	public List<Vehicle> findAllVehiclesByUserId(int ownerId){
		Owner u=new Owner();
		u.setUserId(ownerId);
		List<Vehicle> vehiclesList = vehicleDao.findByOwner(u);

		return vehiclesList;
	}
	@Override
	public boolean removeVehicleByVehicleNumber(Integer userId) throws NoSuchVehicleException {
//		vehicleDao.deleteById(userId);
		if(vehicleDao.existsById(userId))
		{
			vehicleDao.deleteById(userId);
			return true;
		}
		else
		{
			throw new NoSuchVehicleException();
		}
	}
	@Override
	public Vehicle modifyVehicle(Vehicle vehicle) {
		vehicleDao.save(vehicle);
		return vehicle;
	}
	public List<Vehicle> getAllVehicle() {
		// TODO Auto-generated method stub
		return vehicleDao.findAll();
	}
	

}
