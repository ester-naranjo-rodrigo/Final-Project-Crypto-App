package com.ironhack.edgeservice.controller.impl;

import com.ironhack.edgeservice.controller.dto.*;
import com.ironhack.edgeservice.controller.interfaces.*;
import com.ironhack.edgeservice.service.impl.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.web.bind.annotation.*;

import javax.validation.*;
import java.util.*;

@RestController
@CrossOrigin
public class InvestmentEdgeController implements IInvestmentEdgeController {

    @Autowired
    private InvestmentEdgeService investmentEdgeService;

    @GetMapping("/investment/{user}")
    public List<Investment> showInvestment(@PathVariable Long user){
        return investmentEdgeService.showInvestment(user);
    }

    @PostMapping("/investment")
    public Investment storeInvestment(@RequestBody Investment investment){
        return investmentEdgeService.storeInvestment(investment);
    }

    @PutMapping("/investment")
    public void updateInvestment(@RequestBody @Valid Investment investment){
        investmentEdgeService.updateInvestment(investment);
    }

    @DeleteMapping("/investment/{id}")
    public void deleteInvestment(@PathVariable Long id){
        investmentEdgeService.deleteInvestment(id);
    }
}
