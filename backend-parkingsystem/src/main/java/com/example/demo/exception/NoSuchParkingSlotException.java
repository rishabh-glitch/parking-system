package com.example.demo.exception;

public class NoSuchParkingSlotException extends Exception{
private String msg;
	
	public NoSuchParkingSlotException(String msg)
	{
		super();
		this.msg = msg;
	}
	public NoSuchParkingSlotException() {
		super();
	}

}
