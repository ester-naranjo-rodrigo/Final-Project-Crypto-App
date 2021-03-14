package com.ironhack.investmentservice.repository;

import com.ironhack.investmentservice.model.*;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.*;

import java.util.*;

@Repository
public interface InvestmentRepository extends JpaRepository<Investment, Long> {
    List<Investment> findByUser(Long user);
    Optional<Investment> findById(Long id);
}
