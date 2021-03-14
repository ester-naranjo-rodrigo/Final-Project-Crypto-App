package com.ironhack.userservice.service.impl;

import com.ironhack.userservice.model.*;
import com.ironhack.userservice.repository.*;
import com.ironhack.userservice.service.interfaces.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.http.*;
import org.springframework.stereotype.*;
import org.springframework.web.server.*;

import java.util.*;

@Service
public class UserService implements IUserService {

    @Autowired
    private UserRepository userRepository;


    public User showUser(String username) {
        Optional<User> user = userRepository.findByUsername(username);

        if (user.isPresent()) {
            return user.get();
        }
        else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    public User storeUser(User user) {
        User newUser = new User();
        newUser.setName(user.getName());
        newUser.setUsername(user.getUsername());
        newUser.setPassword(user.getPassword());
        newUser.setCountry(user.getCountry());
        userRepository.save(newUser);
        return newUser;
    }

    public void updateUser(User user) {
        Optional<User> userUp = userRepository.findById(user.getId());
        if (userUp.isPresent()) {
            userUp.get().setName(user.getName());
            userUp.get().setUsername(user.getUsername());
            userUp.get().setPassword(user.getPassword());
            userUp.get().setCountry(user.getCountry());
            userRepository.save(userUp.get());
        }
        else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    public void deleteUser(String username) {
        Optional<User> user = userRepository.findByUsername(username);
        if (user.isPresent()) {
            userRepository.delete(user.get());
        }
        else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }
}