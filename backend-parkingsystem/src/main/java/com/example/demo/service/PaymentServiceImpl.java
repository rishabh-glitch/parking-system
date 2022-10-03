package com.example.demo.service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.entity.Payment;
import com.example.demo.exception.NoSuchPaymentFoundException;
import com.example.demo.repository.PaymentRepository;

@Service
public class PaymentServiceImpl implements PaymentService{
	
	@Autowired
	private PaymentRepository paymentrepo;

	@Override
	public Optional<Payment> findPaymentById(Integer paymentId) throws NoSuchPaymentFoundException {
		// TODO Auto-generated method stub
		
		if(paymentrepo.existsById(paymentId))
		{
			return paymentrepo.findById(paymentId);
		}
		else 
		{
			throw new NoSuchPaymentFoundException();
		}
	}

	
	@Override
	public List<Payment> findPaymentByDate(Date paymentDate) throws NoSuchPaymentFoundException {
		// TODO Auto-generated method stub
		
		List<Payment> result = paymentrepo.findAllByPaymentDateTime(paymentDate);
		if(result.size()>0)
		{
			
			return result;
		}
		else
		{
			throw new NoSuchPaymentFoundException();
		}

	}
}
