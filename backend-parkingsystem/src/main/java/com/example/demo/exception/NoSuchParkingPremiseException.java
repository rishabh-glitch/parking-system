package com.example.demo.exception;

public class NoSuchParkingPremiseException extends Exception {
    private String message;
	
	public NoSuchParkingPremiseException() {
		super();
	}
	
	public NoSuchParkingPremiseException(String message) {
		super();
		this.message=message;
	}
}
