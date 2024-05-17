// PM2-maccari78/back/src/services/movieService.js
const Movie = require('../models/Movie');

const movieService = {
  getAllMovies: async () => {
    try {
      const movies = await Movie.find();
      return movies;
    } catch (error) {
      console.error('Error al obtener las películas:', error);
      throw error;
    }
  },

  createMovie: async (movieData) => {
    try {
      const newMovie = await Movie.create(movieData);
      return newMovie;
    } catch (error) {
      console.error('Error al crear la película:', error);
      throw error;
    }
  },
};

module.exports = movieService;



