package com.ironhack.userservice.controller.impl;

import com.ironhack.userservice.controller.interfaces.*;
import com.ironhack.userservice.model.*;
import com.ironhack.userservice.repository.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import com.ironhack.userservice.service.impl.UserService;

import javax.validation.*;
import java.util.*;

@RestController
@CrossOrigin
public class UserController implements IUserController {
    @Autowired
    private UserService userService;

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/user/{username}")
    @ResponseStatus(HttpStatus.OK)
    public User showUser(@PathVariable String username) {
        return userService.showUser(username);
    }

    @GetMapping("/users")
    @ResponseStatus(HttpStatus.OK)
    public List<User> showUsers() {
        return userRepository.findAll();
    }

    @PostMapping("/user")
    @ResponseStatus(HttpStatus.CREATED)
    public User storeUser(@RequestBody User user) {
        return userService.storeUser(user);
    }

    @PutMapping("/user")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void updateAccount(@RequestBody @Valid User user) {
        userService.updateUser(user);
    }

    @DeleteMapping("/user/{username}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteUser(@PathVariable String username) {
        userService.deleteUser(username);
    }

}
