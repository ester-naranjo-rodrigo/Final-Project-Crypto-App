package com.ironhack.investmentservice.controller.impl;

import com.ironhack.investmentservice.controller.interfaces.*;
import com.ironhack.investmentservice.model.*;
import com.ironhack.investmentservice.service.impl.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import javax.validation.*;
import java.util.*;

@RestController
@CrossOrigin
public class InvestmentController implements IInvestmentController {
    @Autowired
    private InvestmentService investmentService;

    @GetMapping("/investment/{user}")
    @ResponseStatus(HttpStatus.OK)
    public List<Investment> showInvestment(@PathVariable Long user) {
        return investmentService.showInvestment(user);
    }

    @PostMapping("/investment")
    @ResponseStatus(HttpStatus.CREATED)
    public Investment storeInvestment(@RequestBody Investment investment) {
        return investmentService.storeInvestment(investment);
    }

    @PutMapping("/investment")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void updateInvestment(@RequestBody @Valid Investment investment) {
        investmentService.updateInvestment(investment);
    }

    @DeleteMapping("/investment/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteInvestment(@PathVariable Long id) {
        investmentService.deleteInvestment(id);
    }

}
