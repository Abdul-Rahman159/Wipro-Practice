package com.wipro.collections;

import java.util.Comparator;

public abstract class SortMovieByLanguage implements Comparator<Movie> {

	@Override
	public int compare(Movie o1, Movie o2) {
		// TODO Auto-generated method stub
		return o1.getLanguage().compareTo(o2.getLanguage());
	}

}