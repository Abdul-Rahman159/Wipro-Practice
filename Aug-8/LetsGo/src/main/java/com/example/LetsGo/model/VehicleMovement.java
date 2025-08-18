package com.example.LetsGo.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "vehicle_movement")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class VehicleMovement {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "veh_id")
    private Long vehId;

    private Double lat;

    @Column(name = "longitude") // because "long" is reserved in Java
    private Double longitude;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getVehId() {
        return vehId;
    }

    public void setVehId(Long vehId) {
        this.vehId = vehId;
    }

    public Double getLat() {
        return lat;
    }

    public void setLat(Double lat) {
        this.lat = lat;
    }

    public Double getLongitude() {
        return longitude;
    }

    public void setLongitude(Double longitude) {
        this.longitude = longitude;
    }
}

