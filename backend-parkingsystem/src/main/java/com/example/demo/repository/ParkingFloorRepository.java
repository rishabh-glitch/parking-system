package com.example.demo.repository;

import java.util.List;

import javax.persistence.EntityManager;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.ParkingFloor;
import com.example.demo.entity.ParkingPremise;
import com.example.demo.entity.ParkingSlots;

@Repository
public interface ParkingFloorRepository extends JpaRepository<ParkingFloor,Integer>{

	List<ParkingFloor> findByFloorNumber(String floorNumber);
}
