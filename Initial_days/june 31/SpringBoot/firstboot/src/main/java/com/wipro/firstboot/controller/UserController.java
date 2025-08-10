package com.wipro.firstboot.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.wipro.firstboot.User;

@Controller
public class UserController {

    @GetMapping("/userreg")
    public String showForm(Model model) {
        model.addAttribute("user", new User());
        return "userreg";
    }

    @PostMapping("/register")
    public String registerUser(@ModelAttribute("user") User user) {
    	System.out.println("Username- " + user.getUsername());
        System.out.println("Email- " + user.getUserEmail());
        System.out.println("Phone- " + user.getUserPhone());
        return "success";
    }
}
