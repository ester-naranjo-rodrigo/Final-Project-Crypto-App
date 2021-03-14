package com.ironhack.edgeservice.controller.interfaces;

import com.ironhack.edgeservice.controller.dto.*;
import org.springframework.web.bind.annotation.*;

import javax.validation.*;
import java.util.*;

public interface IUserEdgeController {
    User showUser(String username);
    List<User> showUsers();
    User storeUser(User user);
    void updateAccount(User user);
    void deleteUser(String username);
}
