package com.ironhack.marketservice.controller.impl;

import com.ironhack.marketservice.controller.interfaces.*;
import com.ironhack.marketservice.service.impl.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import java.io.*;

@RestController
@CrossOrigin
public class MarketController implements IMarketController {
    @Autowired
    private MarketService marketService;

    @GetMapping("/historical/{coin}")
    @ResponseStatus(HttpStatus.OK)
    public String showHistorical(@PathVariable String coin) throws IOException {
        return marketService.showHistorical(coin);
    }

    @GetMapping("/quotes")
    @ResponseStatus(HttpStatus.OK)
    public String showCurrentValues() throws IOException {
        return marketService.showCurrentValues();
    }
}
