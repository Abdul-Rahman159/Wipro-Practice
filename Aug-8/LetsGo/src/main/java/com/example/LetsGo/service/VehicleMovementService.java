package com.example.LetsGo.service;

import org.springframework.stereotype.Service;
import com.example.LetsGo.dto.VehicleMovementRequest;
import com.example.LetsGo.model.VehicleMovement;
import com.example.LetsGo.Repo.VehicleMovementRepository;

import java.util.List;

@Service
public class VehicleMovementService {

    private final VehicleMovementRepository repo;

    public VehicleMovementService(VehicleMovementRepository repo) {
        this.repo = repo;
    }

    // Create
    public VehicleMovement saveMovement(VehicleMovementRequest request) {
        VehicleMovement movement = new VehicleMovement();
        movement.setVehId(request.getVehId());
        movement.setLat(request.getLat());
        movement.setLongitude(request.getLongitude());
        return repo.save(movement);
    }

    // Read all
    public List<VehicleMovement> getAllMovements() {
        return repo.findAll();
    }

    // Read by ID
    public VehicleMovement getMovementById(Long id) {
        return repo.findById(id)
                .orElseThrow(() -> new RuntimeException("Vehicle movement not found with id: " + id));
    }

    // Update
    public VehicleMovement updateMovement(Long id, VehicleMovementRequest request) {
        VehicleMovement existing = getMovementById(id);
        existing.setVehId(request.getVehId());
        existing.setLat(request.getLat());
        existing.setLongitude(request.getLongitude());
        return repo.save(existing);
    }

    // Delete
    public void deleteMovement(Long id) {
        if (!repo.existsById(id)) {
            throw new RuntimeException("Vehicle movement not found with id: " + id);
        }
        repo.deleteById(id);
    }
}
