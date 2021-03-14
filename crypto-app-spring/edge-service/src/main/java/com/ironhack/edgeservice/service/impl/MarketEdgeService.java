package com.ironhack.edgeservice.service.impl;

import com.ironhack.edgeservice.clients.*;
import com.ironhack.edgeservice.controller.dto.*;
import com.ironhack.edgeservice.controller.interfaces.*;
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
public class MarketEdgeService implements IMarketEdgeService {

    @Autowired
    private MarketClient marketClient;

    public String showHistorical(String coin) {
        return marketClient.showHistorical(coin);
    }

    public String showCurrentValues() {
        return marketClient.showCurrentValues();
    }

}
