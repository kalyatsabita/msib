const express = require('express');
const router = express.Router();

const sensors = [];
router.get('/sensor', (req, res) => {
    res.status(200).json(sensors)
});

router.post('/sensor', (req, res) => {
    const newSensor = req.body
    sensors.push(newSensor)
    res.status(201).json(newSensor)
});

router.put('/sensor/:index', (req, res) => {
    const sensorId = req.params.id
    const updatedSensor = req.body
    const sensorUpdate = sensors.find(sensor => sensor.id === sensorId)
    
    if (sensorUpdate) {
        sensorUpdate.longitude = updatedSensor.longitude
        sensorUpdate.latitude = updatedSensor.latitude
        sensorUpdate.wind_direction = updatedSensor.wind_direction
        sensorUpdate.water_level = updatedSensor.water_level
        res.json(sensorUpdate)
    } else {
        res.status(400).json({ error: 'Sensor not found' })
    }
});

module.exports = router