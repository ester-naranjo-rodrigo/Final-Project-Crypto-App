package com.ironhack.userservice.controller.interfaces;

import com.ironhack.userservice.model.*;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import javax.validation.*;
import java.util.*;

public interface IUserController {
    User showUser(String username);
    List<User> showUsers();
    User storeUser(User user);
    void updateAccount(User user);
    void deleteUser(String username);
}
