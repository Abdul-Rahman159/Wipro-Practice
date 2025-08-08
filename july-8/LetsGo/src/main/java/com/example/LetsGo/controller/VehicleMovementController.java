package com.example.LetsGo.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.LetsGo.dto.VehicleMovementRequest;
import com.example.LetsGo.model.VehicleMovement;
import com.example.LetsGo.service.VehicleMovementService;

import java.util.List;

@RestController
@RequestMapping("/move")
public class VehicleMovementController {

    private final VehicleMovementService service;

    public VehicleMovementController(VehicleMovementService service) {
        this.service = service;
    }

    // Create (POST)
    @PostMapping
    public ResponseEntity<VehicleMovement> createMovement(@RequestBody VehicleMovementRequest request) {
        VehicleMovement saved = service.saveMovement(request);
        return ResponseEntity.ok(saved);
    }

    // Read all (GET)
    @GetMapping
    public ResponseEntity<List<VehicleMovement>> getAllMovements() {
        return ResponseEntity.ok(service.getAllMovements());
    }

    // Read by ID (GET)
    @GetMapping("/{id}")
    public ResponseEntity<VehicleMovement> getMovementById(@PathVariable Long id) {
        return ResponseEntity.ok(service.getMovementById(id));
    }

    // Update (PUT)
    @PutMapping("/{id}")
    public ResponseEntity<VehicleMovement> updateMovement(
            @PathVariable Long id,
            @RequestBody VehicleMovementRequest request) {
        return ResponseEntity.ok(service.updateMovement(id, request));
    }

    // Delete (DELETE)
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteMovement(@PathVariable Long id) {
        service.deleteMovement(id);
        return ResponseEntity.ok("Vehicle movement deleted successfully.");
    }
}
