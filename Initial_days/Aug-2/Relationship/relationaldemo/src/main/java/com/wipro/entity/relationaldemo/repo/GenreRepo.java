package com.wipro.entity.relationaldemo.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.wipro.entity.relationaldemo.entity.Genre;

@Repository
public interface GenreRepo extends JpaRepository<Genre, Integer> {

}
