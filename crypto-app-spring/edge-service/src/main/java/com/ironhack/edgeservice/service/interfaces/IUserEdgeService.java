package com.ironhack.edgeservice.service.interfaces;

import com.ironhack.edgeservice.controller.dto.*;

import java.util.*;

public interface IUserEdgeService {
    User showUser(String username);
    List<User> showUsers();
    User storeUser(User user);
    void updateAccount(User user);
    void deleteUser(String username);
}
