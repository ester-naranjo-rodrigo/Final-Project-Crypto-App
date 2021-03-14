package com.ironhack.investmentservice.model;

import org.apache.catalina.*;

import javax.persistence.*;
import java.math.*;
import java.time.*;

@Entity
public class Investment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long user;
    private BigDecimal quantity;
    private String coin;
    private LocalDate dateInvestment;


    public Investment() {
    }

    public Investment(Long user, BigDecimal quantity, String coin, LocalDate dateInvestment) {
        this.user = user;
        this.quantity = quantity;
        this.coin = coin;
        this.dateInvestment = dateInvestment;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getUser() {
        return user;
    }

    public void setUser(Long user) {
        this.user = user;
    }

    public BigDecimal getQuantity() {
        return quantity;
    }

    public void setQuantity(BigDecimal quantity) {
        this.quantity = quantity;
    }

    public String getCoin() {
        return coin;
    }

    public void setCoin(String coin) {
        this.coin = coin;
    }

    public LocalDate getDateInvestment() {
        return dateInvestment;
    }

    public void setDateInvestment(LocalDate dateInvestment) {
        this.dateInvestment = dateInvestment;
    }
}
