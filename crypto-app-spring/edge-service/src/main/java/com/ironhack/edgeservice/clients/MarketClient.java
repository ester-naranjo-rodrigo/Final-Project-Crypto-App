package com.ironhack.edgeservice.clients;

import org.springframework.cloud.openfeign.*;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import java.io.*;

@FeignClient("market-service")
public interface MarketClient {

    @GetMapping("/historical/{coin}")
    public String showHistorical(@PathVariable String coin);

    @GetMapping("/quotes")
    public String showCurrentValues();
}
