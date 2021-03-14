package com.ironhack.investmentservice.service.impl;

import com.ironhack.investmentservice.model.*;
import com.ironhack.investmentservice.repository.*;
import com.ironhack.investmentservice.service.interfaces.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.http.*;
import org.springframework.stereotype.*;
import org.springframework.web.server.*;

import java.util.*;

@Service
public class InvestmentService implements IInvestmentService {

    @Autowired
    private InvestmentRepository investmentRepository;

    public List<Investment> showInvestment(Long user) {

        return investmentRepository.findByUser(user);
    }

    public Investment storeInvestment(Investment investment) {
        Investment newInvestment = new Investment();
        newInvestment.setUser(investment.getUser());
        newInvestment.setQuantity(investment.getQuantity());
        newInvestment.setCoin(investment.getCoin());
        newInvestment.setDateInvestment(investment.getDateInvestment());
        investmentRepository.save(newInvestment);
        return newInvestment;
    }

    public void updateInvestment(Investment investment) {
        Optional<Investment> investmentUp = investmentRepository.findById(investment.getId());
        if (investmentUp.isPresent()) {
            investmentUp.get().setQuantity(investment.getQuantity());
            investmentUp.get().setCoin(investment.getCoin());
            investmentUp.get().setDateInvestment(investment.getDateInvestment());
            investmentRepository.save(investmentUp.get());
        }
        else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    public void deleteInvestment(Long id) {
        Optional<Investment> investmentDel = investmentRepository.findById(id);
        if (investmentDel.isPresent()) {
            investmentRepository.delete(investmentDel.get());
        }
        else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }
}
