// PM2-maccari78/back/src/middleware/validateMovie.js

const validateMovie = (req, res, next) => {
    const { title, year, director, rate, poster } = req.body;
    if (!title || !year || !director || !rate|| !poster) {
      return res.status(400).json({ message: 'Todos los campos son obligatorios.' });
    }
    next();
  };
  
  module.exports = validateMovie;
  