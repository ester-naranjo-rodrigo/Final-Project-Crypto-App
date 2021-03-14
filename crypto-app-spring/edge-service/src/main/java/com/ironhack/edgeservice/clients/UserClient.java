package com.ironhack.edgeservice.clients;

import com.ironhack.edgeservice.controller.dto.*;
import org.springframework.cloud.openfeign.*;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import javax.validation.*;
import java.util.*;

@FeignClient("user-service")
public interface UserClient {

    @GetMapping("/user/{username}")
    User showUser(@PathVariable String username);

    @PostMapping("/user")
    User storeUser(@RequestBody User user);

    @PutMapping("/user")
    void updateAccount(@RequestBody @Valid User user);

    @DeleteMapping("/user/{username}")
    void deleteUser(@PathVariable String username);

    @GetMapping("/users")
    List<User> showUsers();
}
