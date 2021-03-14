package com.ironhack.exchangeservice.controller.impl;

import com.ironhack.exchangeservice.controller.interfaces.*;
import com.ironhack.exchangeservice.service.impl.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import java.io.*;

@RestController
@CrossOrigin
public class ExchangeController implements IExchangeController {
    @Autowired
    private ExchangeService exchangeService;

    @GetMapping("/exchange")
    @ResponseStatus(HttpStatus.OK)
    public String showExchange() throws IOException {
        return exchangeService.showExchange();
    }
}
