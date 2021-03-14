package com.ironhack.userservice.service.interfaces;

import com.ironhack.userservice.model.*;
import org.springframework.http.*;
import org.springframework.web.server.*;

import java.util.*;

public interface IUserService {
    User showUser(String username);
    User storeUser(User user);
    void updateUser(User user);
    void deleteUser(String username);
}
