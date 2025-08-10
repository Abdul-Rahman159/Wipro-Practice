package com.wipro.entity.relationaldemo.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.wipro.entity.relationaldemo.entity.Movie;

@Repository
public interface MovieRepo extends JpaRepository<Movie, Integer> {

}
