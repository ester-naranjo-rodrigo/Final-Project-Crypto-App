package com.ironhack.edgeservice.controller.interfaces;

import com.ironhack.edgeservice.controller.dto.*;
import org.springframework.web.bind.annotation.*;

import javax.validation.*;
import java.util.*;

public interface IInvestmentEdgeController {

    List<Investment> showInvestment(Long user);
    Investment storeInvestment(Investment investment);
    void updateInvestment(Investment investment);
    void deleteInvestment(Long id);
}
