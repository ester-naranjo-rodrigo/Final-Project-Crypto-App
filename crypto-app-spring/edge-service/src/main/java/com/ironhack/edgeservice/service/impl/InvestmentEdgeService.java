package com.ironhack.edgeservice.service.impl;

import com.ironhack.edgeservice.clients.*;
import com.ironhack.edgeservice.controller.dto.*;
import com.ironhack.edgeservice.service.interfaces.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.cloud.circuitbreaker.resilience4j.*;
import org.springframework.cloud.client.circuitbreaker.*;
import org.springframework.http.*;
import org.springframework.stereotype.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.*;

import javax.validation.*;
import java.util.*;

@Service
public class InvestmentEdgeService implements IInvestmentEdgeService {

    @Autowired
    private InvestmentClient investmentClient;


    public List<Investment> showInvestment(Long user) {
        return investmentClient.showInvestment(user);
    }

    public Investment storeInvestment(Investment investment) {
        return investmentClient.storeInvestment(investment);
    }

    public void updateInvestment(Investment investment){
        investmentClient.updateInvestment(investment);
    }

    public void deleteInvestment(Long id){
        investmentClient.deleteInvestment(id);
    }

}
