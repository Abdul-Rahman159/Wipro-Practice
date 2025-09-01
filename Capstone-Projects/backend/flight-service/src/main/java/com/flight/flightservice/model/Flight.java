    package com.flight.flightservice.model;

    import jakarta.persistence.*;
    import java.time.LocalDate;
    import java.time.LocalTime;

    @Entity
    public class Flight {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;

        private String flightNumber;
        private String airline;
        private String aircraft;
        private String source;
        private String destination;

        private LocalDate validFrom;
        private LocalDate validTo;

        private LocalTime departureTime;
        private LocalTime arrivalTime;
        private String duration;

        private Double price;

        // Getters & Setters
        public Long getId() {
            return id;
        }

        public void setId(Long id) {
            this.id = id;
        }

        public String getFlightNumber() {
            return flightNumber;
        }

        public void setFlightNumber(String flightNumber) {
            this.flightNumber = flightNumber;
        }

        public String getAirline(){ return airline; }
        public void setAirline(String airline){ this.airline = airline; }

        public String getAircraft() {
            return aircraft;
        }

        public void setAircraft(String aircraft) {
            this.aircraft = aircraft;
        }

        public String getSource() {
            return source;
        }

        public void setSource(String source) {
            this.source = source;
        }

        public String getDestination() {
            return destination;
        }

        public void setDestination(String destination) {
            this.destination = destination;
        }

        public LocalDate getValidFrom() {
            return validFrom;
        }

        public void setValidFrom(LocalDate validFrom) {
            this.validFrom = validFrom;
        }

        public LocalDate getValidTo() {
            return validTo;
        }

        public void setValidTo(LocalDate validTo) {
            this.validTo = validTo;
        }

        public LocalTime getDepartureTime() {
            return departureTime;
        }

        public void setDepartureTime(LocalTime departureTime) {
            this.departureTime = departureTime;
        }

        public LocalTime getArrivalTime() {
            return arrivalTime;
        }

        public void setArrivalTime(LocalTime arrivalTime) {
            this.arrivalTime = arrivalTime;
        }

        public String getDuration(){
            return duration;
        }
        public void setDuration(String duration){
            this.duration = duration;
        }

        public Double getPrice() {
            return price;
        }

        public void setPrice(Double price) {
            this.price = price;
        }
    }
