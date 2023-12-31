const express = require('express');
const router = express.Router();
const { getCurrentWeatherController, getWeeklyWeatherController } = require('./weather.controller');

router.get('/current', getCurrentWeatherController);
router.get('/weekly', getWeeklyWeatherController);

module.exports = router;
