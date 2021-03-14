package com.ironhack.edgeservice.clients;

import org.springframework.cloud.openfeign.*;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import java.io.*;

@FeignClient("exchange-service")
public interface ExchangeClient {

    @GetMapping("/exchange")
    String showExchange();
}
