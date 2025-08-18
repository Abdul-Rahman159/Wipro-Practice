package com.example.LetsGo.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.LetsGo.model.VehicleMovement;

public interface VehicleMovementRepository extends JpaRepository<VehicleMovement, Long> {
}

