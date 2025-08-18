package com.wipro.entity.relationaldemo.service;

import java.util.List;

import com.wipro.entity.relationaldemo.entity.Movie;

public interface MovieService {
	void save(Movie movie);
	List<Movie> findAll();
}
