package com.ironhack.edgeservice.controller.dto;

public class User {

    private Long id;
    private String name;
    private String username;
    private String password;
    private String country;

    public User() {
    }

    public User(Long id, String name, String username, String password, String country) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.password = password;
        this.country = country;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }
}
