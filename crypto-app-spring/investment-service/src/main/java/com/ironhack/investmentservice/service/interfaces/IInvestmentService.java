package com.ironhack.investmentservice.service.interfaces;

import com.ironhack.investmentservice.model.*;
import org.springframework.http.*;
import org.springframework.web.server.*;

import java.util.*;

public interface IInvestmentService {

    List<Investment> showInvestment(Long user);
    Investment storeInvestment(Investment investment);
    void updateInvestment(Investment investment);
    void deleteInvestment(Long id);
}
