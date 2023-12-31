// Use dynamic import
import('node-fetch').then((fetch) => {
    // Now you can use fetch
    const express = require('express');
  
    async function getCurrentWeatherController(req, res) {
      const { latitude, longitude } = req.query;
  
      try {
        const apiKey = '46c6c92b227b811959df28fc16e0e637';
        const currentWeatherEndpoint = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  
        const response = await fetch.default(currentWeatherEndpoint);
  
        if (!response.ok) {
          throw new Error(`Failed to fetch current weather. Status: ${response.status}`);
        }
  
        const currentWeatherData = await response.json();
  
        if (!currentWeatherData.main || !currentWeatherData.main.temp) {
          throw new Error('Invalid response structure for current weather data.');
        }
  
        const currentWeather = {
          temperature: currentWeatherData.main.temp,
          description: currentWeatherData.weather[0].description,
          icon: currentWeatherData.weather[0].icon,
        };
  
        res.json({ currentWeather });
      } catch (error) {
        console.error(error);
        res.status(500).send('Terjadi kesalahan dalam mengambil data cuaca terkini.');
      }
    }
  
    // Rest of the code remains the same
    // ...
  
    const router = express.Router();
    router.get('/current', getCurrentWeatherController);
    module.exports = router;
  });
  