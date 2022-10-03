package com.example.demo.repository;

import java.sql.SQLException;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import com.example.demo.entity.Owner;
import com.example.demo.entity.Vehicle;

@Repository
public interface VehicleRepository extends JpaRepository<Vehicle,Integer>{
	//public boolean createUsersVehicle(Vehicle vehicle) throws SQLException;

	//public boolean deleteVehicleByVehicleNumber(String vehicleNumber, int userId) throws SQLException;

	//public Vehicle updateVehicle(Vehicle vehicle);

	public Vehicle findByVehicleNumberAndOwnerUserId(String vehicleNumber, int userId);

	public List<Vehicle> findByOwner(Owner u);

}
