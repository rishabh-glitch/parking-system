package com.example.demo.exception;

public class NoSuchVehicleException extends Exception {
    private String message;
	
	public NoSuchVehicleException() {
		super();
	}
	
	public NoSuchVehicleException(String message) {
		super();
		this.message=message;
	}
}
