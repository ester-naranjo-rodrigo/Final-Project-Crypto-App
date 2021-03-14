package com.ironhack.edgeservice.service.impl;

import com.ironhack.edgeservice.clients.*;
import com.ironhack.edgeservice.controller.dto.*;
import com.ironhack.edgeservice.service.interfaces.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.cloud.circuitbreaker.resilience4j.*;
import org.springframework.cloud.client.circuitbreaker.*;
import org.springframework.http.*;
import org.springframework.stereotype.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.*;

import javax.validation.*;
import java.util.*;

@Service
public class UserEdgeService implements IUserEdgeService {

    @Autowired
    private UserClient userClient;

    public User showUser(String username){
        return userClient.showUser(username);
    }

    public User storeUser(User user){
        return userClient.storeUser(user);
    }

    public void updateAccount(User user){
        userClient.updateAccount(user);
    }

    public void deleteUser(String username){
        userClient.deleteUser(username);
    }

    public List<User> showUsers() {
        return userClient.showUsers();
    }
}
