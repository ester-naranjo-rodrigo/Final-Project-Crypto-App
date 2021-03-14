package com.ironhack.edgeservice.service.interfaces;

import com.ironhack.edgeservice.controller.dto.*;

import java.util.*;

public interface IInvestmentEdgeService {
    List<Investment> showInvestment(Long user);
    Investment storeInvestment(Investment investment);
    void updateInvestment(Investment investment);
    void deleteInvestment(Long id);
}
