package com.ironhack.edgeservice.controller.interfaces;

import org.springframework.web.bind.annotation.*;

public interface IMarketEdgeController {
    String showHistorical(String coin);
    String showCurrentValues();
}
