package com.flight.flightservice.repository;

import com.flight.flightservice.model.Flight;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface FlightRepository extends JpaRepository<Flight, Long> {
    List<Flight> findBySourceIgnoreCaseAndDestinationIgnoreCaseAndValidFromLessThanEqualAndValidToGreaterThanEqual(
            String source, String destination, LocalDate from, LocalDate to
    );
}
