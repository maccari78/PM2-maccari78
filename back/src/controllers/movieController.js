// PM2-maccari78/back/src/controllers/movieController.js
const movieService = require('../services/movieService');
const Movie = require('../models/Movie');

const movieController = {
  getMovies: async (req, res) => {
    try {
      const movies = await Movie.find();
      res.json(movies);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  createMovie: async (req, res) => {
    try {
      const { title, year, director, rate, poster } = req.body;
      if (!title || !year || !director || !rate|| !poster) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios.' });
      }

      const movieData = { title, year, director, rate, poster };
      const newMovie = await movieService.createMovie(movieData);
      res.status(201).json(newMovie);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = movieController;





