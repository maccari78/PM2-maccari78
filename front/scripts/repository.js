// scripts/repository.js

class Movie {
  constructor(title, year, director, rate, poster) {
    this.title = title;
    this.year = year;
    this.director = director;
    this.rate = rate;
    this.poster = poster;
  }
}

class Repository {
  constructor() {
    this.movies = [];
  }

  createMovie({ title, year, director, rate, poster }) {
    const newMovie = new Movie(title, year, director, rate, poster);
    this.movies.push(newMovie);
  }

  getAllMovies() {
    return this.movies;
  }
}

export { Movie, Repository };
