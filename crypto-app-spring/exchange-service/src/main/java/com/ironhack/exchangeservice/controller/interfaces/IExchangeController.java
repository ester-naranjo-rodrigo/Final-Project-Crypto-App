package com.ironhack.exchangeservice.controller.interfaces;

import org.springframework.web.bind.annotation.*;

import java.io.*;

public interface IExchangeController {
    String showExchange() throws IOException;
}
