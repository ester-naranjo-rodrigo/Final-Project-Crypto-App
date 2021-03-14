package com.ironhack.edgeservice.controller.impl;

import com.ironhack.edgeservice.controller.interfaces.*;
import com.ironhack.edgeservice.service.impl.*;
import com.ironhack.edgeservice.service.interfaces.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.web.bind.annotation.*;

import java.io.*;

@RestController
@CrossOrigin
public class ExchangeEdgeController implements IExchangeEdgeController {

    @Autowired
    private ExchangeEdgeService exchangeEdgeService;

    @GetMapping("/exchange")
    public String showExchange() {
        return exchangeEdgeService.showExchange();
    }
}
