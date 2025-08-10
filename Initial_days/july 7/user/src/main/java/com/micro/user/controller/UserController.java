package com.micro.user.controller;

import com.micro.user.model.User;
import com.micro.user.dto.UserNotificationDTO;
import com.micro.user.Repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.Optional;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RestTemplate restTemplate;

    private final String NOTIFY_URL = "http://localhost:9015/notify";

    private void sendNotification(User user, String action) {
        UserNotificationDTO dto = new UserNotificationDTO(user, action);

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        HttpEntity<UserNotificationDTO> request = new HttpEntity<>(dto, headers);

        try {
            ResponseEntity<String> response = restTemplate.postForEntity(NOTIFY_URL, request, String.class);
            System.out.println("✅ Notification response: " + response.getBody());
        } catch (Exception e) {
            System.out.println("❌ Error sending notification:");
            e.printStackTrace();
        }
    }

    // ✅ CREATE
    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody User user) {
        User savedUser = userRepository.save(user);
        sendNotification(savedUser, "Created");
        return ResponseEntity.ok(savedUser);
    }

    @GetMapping
    public ResponseEntity<Iterable<User>> getAllUsers() {
        Iterable<User> users = userRepository.findAll();
        return ResponseEntity.ok(users);
    }

    // ✅ READ
    @GetMapping("/{id}")
    public ResponseEntity<User> getUser(@PathVariable Long id) {
        Optional<User> userOpt = userRepository.findById(id);
        return userOpt.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // ✅ UPDATE
    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User updatedUser) {
        Optional<User> userOpt = userRepository.findById(id);
        if (userOpt.isPresent()) {
            User existingUser = userOpt.get();
            existingUser.setUsername(updatedUser.getUsername());
            existingUser.setPassword(updatedUser.getPassword());
            existingUser.setAddress(updatedUser.getAddress());

            User savedUser = userRepository.save(existingUser);
            sendNotification(savedUser, "Updated");
            return ResponseEntity.ok(savedUser);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // ✅ DELETE
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        Optional<User> userOpt = userRepository.findById(id);
        if (userOpt.isPresent()) {
            userRepository.deleteById(id);
            sendNotification(userOpt.get(), "Deleted");
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
