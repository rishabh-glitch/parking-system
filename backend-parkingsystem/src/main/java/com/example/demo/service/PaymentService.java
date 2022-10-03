package com.example.demo.service;


import java.util.Date;
import java.util.List;
import java.util.Optional;

import com.example.demo.entity.Payment;
import com.example.demo.exception.NoSuchPaymentFoundException;

public interface PaymentService {

	public Optional<Payment> findPaymentById(Integer paymentId) throws NoSuchPaymentFoundException;

	public List<Payment> findPaymentByDate(Date paymentDate) throws NoSuchPaymentFoundException;
}
