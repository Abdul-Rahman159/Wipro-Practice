package com.example.LetsGo.dto;

import lombok.Data;

@Data
public class VehicleMovementRequest {
    private Long vehId;
    private Double lat;
    private Double longitude;// using longitude instead of "long"

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

