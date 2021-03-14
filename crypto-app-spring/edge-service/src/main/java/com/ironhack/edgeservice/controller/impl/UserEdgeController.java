package com.ironhack.edgeservice.controller.impl;

import com.ironhack.edgeservice.controller.dto.*;
import com.ironhack.edgeservice.controller.interfaces.*;
import com.ironhack.edgeservice.service.impl.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.web.bind.annotation.*;

import javax.validation.*;
import java.util.*;

@RestController
@CrossOrigin
public class UserEdgeController implements IUserEdgeController {

    @Autowired
    private UserEdgeService userEdgeService;



    @GetMapping("/user/{username}")
    public User showUser(@PathVariable String username) {
        return userEdgeService.showUser(username);
    }

    @GetMapping("/users")
    public List<User> showUsers() {
        return userEdgeService.showUsers();
    }

    @PostMapping("/user")
    public User storeUser(@RequestBody User user) {
        return userEdgeService.storeUser(user);
    }

    @PutMapping("/user")
    public void updateAccount(@RequestBody User user) {
        userEdgeService.updateAccount(user);
    }

    @DeleteMapping("/user/{username}")
    public void deleteUser(@PathVariable String username) {
        userEdgeService.deleteUser(username);
    }
}
