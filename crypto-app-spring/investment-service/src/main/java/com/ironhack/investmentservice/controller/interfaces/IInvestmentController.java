package com.ironhack.investmentservice.controller.interfaces;

import com.ironhack.investmentservice.model.*;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import javax.validation.*;
import java.util.*;

public interface IInvestmentController {

    List<Investment> showInvestment(Long user);
    Investment storeInvestment(Investment investment);
    void updateInvestment(Investment investment);
    void deleteInvestment(Long id);
}
