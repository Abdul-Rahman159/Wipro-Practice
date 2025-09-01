package com.flight.flightservice.controller;

import com.flight.flightservice.model.Flight;
import com.flight.flightservice.repository.FlightRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/flights")
public class FlightController {

    private final FlightRepository repo;

    public FlightController(FlightRepository repo) {
        this.repo = repo;
    }

    @PostMapping
    public Flight createFlight(@RequestBody Flight flight) {
        return repo.save(flight);
    }

    // Get all flights
    @GetMapping
    public List<Flight> getAllFlights() {
        return repo.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getFlightById(@PathVariable Long id) {
        Optional<Flight> flight = repo.findById(id);
        return flight.isPresent()
                ? ResponseEntity.ok(flight.get())
                : ResponseEntity.notFound().build();
    }

    // Search flights by source, destination and date
    @GetMapping("/search")
    public List<Flight> search(
            @RequestParam String source,
            @RequestParam String destination,
            @RequestParam String date
    ) {
        LocalDate d = LocalDate.parse(date);
        return repo.findBySourceIgnoreCaseAndDestinationIgnoreCaseAndValidFromLessThanEqualAndValidToGreaterThanEqual(
                source, destination, d, d
        );
    }
}
