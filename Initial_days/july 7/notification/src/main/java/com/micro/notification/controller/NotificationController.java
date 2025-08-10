package com.micro.notification.controller;

import com.micro.notification.DTO.UserNotificationDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/notify")
public class NotificationController {

    @PostMapping
    public ResponseEntity<String> notify(@RequestBody UserNotificationDTO dto) {
        if (dto.getUser() == null || dto.getAction() == null) {
            System.out.println("❌ Missing data in notification DTO");
            return ResponseEntity.badRequest().body("User or action missing");
        }

        String username = dto.getUser().getUsername();
        String action = dto.getAction();

        System.out.println("✅ User " + username + " information is " + action);
        return ResponseEntity.ok("Notification processed");
    }
}
