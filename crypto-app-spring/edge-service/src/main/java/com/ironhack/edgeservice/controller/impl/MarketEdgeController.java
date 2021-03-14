package com.ironhack.edgeservice.controller.impl;

import com.ironhack.edgeservice.controller.interfaces.*;
import com.ironhack.edgeservice.service.impl.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.web.bind.annotation.*;

import java.io.*;

@RestController
@CrossOrigin
public class MarketEdgeController implements IMarketEdgeController {

    @Autowired
    private MarketEdgeService marketEdgeService;

    @GetMapping("/historical/{coin}")
    public String showHistorical(@PathVariable String coin) {
        return marketEdgeService.showHistorical(coin);
    }

    @GetMapping("/quotes")
    public String showCurrentValues() {
        return marketEdgeService.showCurrentValues();
    }
}
