// scripts/main.js

import axios from "axios";
import { Repository } from "./repository.js";
import { createMovieCard, clearMoviesContainer } from "./ui.js";
import { loadNavFooter } from "./loadNavFooter.js";

loadNavFooter();

const addMovieButton = $("#addMovieButton");
let moviesData = [];
const repository = new Repository();

const refresh = () => {
  clearMoviesContainer();

  const moviesContainer = $("#moviesContainer");
  repository.getAllMovies().forEach((movie) => {
    const card = createMovieCard(movie);
    moviesContainer.append(card);
  });
};

const obtenerPeliculas = async () => {
  try {
    const response = await axios.get("http://localhost:3000/movies");
    moviesData = response.data;
  } catch (error) {
    console.error("Error al obtener las películas:", error);
  }
};

const addMovie = () => {
  if (moviesData.length === 0) {
    alert("No hay más películas disponibles.");
    return;
  }

  const movieIndex = Math.floor(Math.random() * moviesData.length);
  const movie = moviesData.splice(movieIndex, 1)[0];
  repository.createMovie(movie);
  refresh();
};

addMovieButton.on("click", addMovie);

obtenerPeliculas();
