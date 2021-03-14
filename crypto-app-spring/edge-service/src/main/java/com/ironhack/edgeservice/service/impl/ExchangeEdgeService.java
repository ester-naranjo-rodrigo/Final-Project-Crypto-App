package com.ironhack.edgeservice.service.impl;

import com.ironhack.edgeservice.clients.*;
import com.ironhack.edgeservice.service.interfaces.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.cloud.circuitbreaker.resilience4j.*;
import org.springframework.cloud.client.circuitbreaker.*;
import org.springframework.http.*;
import org.springframework.stereotype.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.*;

import java.io.*;

@Service
public class ExchangeEdgeService implements IExchangeEdgeService {

    @Autowired
    private ExchangeClient exchangeClient;

    public String showExchange(){
        return exchangeClient.showExchange();
    }
}
