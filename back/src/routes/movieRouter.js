// PM2-maccari78/back/src/routes/movieRouter.js
const express = require('express');
const movieController = require('../controllers/movieController');
const validateMovie = require("../middleware/validateMovie ");
const router = express.Router();

router.get('/', movieController.getMovies);
router.post("/", validateMovie, movieController.createMovie);

module.exports = router;



