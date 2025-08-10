package com.wipro.collections;

import java.util.Comparator;

public class Movie implements Comparable<Movie> {
	
	String movieName;
	String language;
	String genre;
	double imdbRaing;
	
	
	public String getMovieName() {
		return movieName;
	}
	public void setMovieName(String movieName) {
		this.movieName = movieName;
	}
	public String getLanguage() {
		return language;
	}
	public void setLanguage(String language) {
		this.language = language;
	}
	public String getGenre() {
		return genre;
	}
	public void setGenre(String genre) {
		this.genre = genre;
	}
	public double getImdbRaing() {
		return imdbRaing;
	}
	public void setImdbRaing(double imdbRaing) {
		this.imdbRaing = imdbRaing;
	}
	public Movie(String movieName, String language) {
		super();
		this.movieName = movieName;
		this.language = language;
	}
	public Movie(String movieName, String language, String genre, double imdbRaing) {
		super();
		this.movieName = movieName;
		this.language = language;
		this.genre = genre;
		this.imdbRaing = imdbRaing;
	}
	@Override
	public String toString() {
		return "Movie [movieName=" + movieName + ", language=" + language + ", genre=" + genre + ", imdbRaing="
				+ imdbRaing + "]";
	}
	 
	@Override
	public int compareTo(Movie other) {
//		Double d1= Double.valueOf(this.getImdbRaing());
//		Double d2=  Double.valueOf(other.getImdbRaing());
//		return d1.compareTo(d2);
		return this.getGenre().compareTo(other.getGenre());
 
	}
	}
