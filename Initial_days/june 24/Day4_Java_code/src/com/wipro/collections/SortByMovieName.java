package com.wipro.collections;

import java.util.Comparator;

public abstract class SortByMovieName implements Comparator<Movie> {

	@Override
	public int compare(Movie o1, Movie o2) {
		// TODO Auto-generated method stub
		return o1.getMovieName().compareTo(o2.getMovieName());
	}
 

}