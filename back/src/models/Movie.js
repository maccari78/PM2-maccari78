// PM2-maccari78/back/src/models/Movie.js
const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  rate: {
    type: Number,
    required: true,
  },
  poster: String,
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
