package com.ironhack.edgeservice.clients;

import com.ironhack.edgeservice.controller.dto.*;
import org.springframework.cloud.openfeign.*;
import org.springframework.web.bind.annotation.*;

import javax.validation.*;
import java.util.*;

@FeignClient("investment-service")
public interface InvestmentClient {

    @GetMapping("/investment/{user}")
    List<Investment> showInvestment(@PathVariable Long user);

    @PostMapping("/investment")
    Investment storeInvestment(@RequestBody Investment investment);

    @PutMapping("/investment")
    void updateInvestment(@RequestBody @Valid Investment investment);

    @DeleteMapping("/investment/{id}")
    void deleteInvestment(@PathVariable Long id);
}
