const express = require('express');
const router = express.Router();

const sensors = [];

function validateSensorData(req, res, next) {
    const data = req.body;
    if (
    !data.sensor_type ||
    !data.sensor_id ||
    !data.sensor_name ||
    !data.sensor_location ||
    !data.sensor_longitude ||
    !data.sensor_latitude
    ) {
    return res.status(400).json('Data tidak boleh kosong');
    }
    next();
}

router.get('/sensor', (req, res) => {
    return res.status(200).json(sensors)
});
  
router.get('/sensor/:index', (req, res) => {
    const sensorId = req.params.index
    const dataDetail = sensors[sensorId]
    res.status(200).json(dataDetail)
  });

router.post('/sensor', validateSensorData, (req, res) => {
  const sensorData = req.body
  sensors.push(sensorData)
  res.status(201).json("Data berhasil ditambahkan")
});

function validateSensorUpdate(req, res, next) {
    const data = req.body
    if (data.sensor_id !== undefined || data.sensor_name !== undefined) {
        return res.status(400).json({ error: 'sensor_id dan sensor_name tidak dapat diubah' })
    }
    next()
}
  
router.put('/sensor/:id', validateSensorUpdate, (req, res) => {
    const sensorId = req.params.id
    const sensorData = req.body
  
    const sensorUpdate = sensors.find((sensor) => sensor.sensor_id === parseInt(sensorId))
  
    if (!sensorUpdate) {
      return res.status(404).json({ error: 'Sensor tidak ditemukan' })
    }
  
    sensorUpdate.sensor_type = sensorData.sensor_type || sensorUpdate.sensor_type
    sensorUpdate.sensor_location = sensorData.sensor_location || sensorUpdate.sensor_location
    sensorUpdate.sensor_longitude = sensorData.sensor_longitude || sensorUpdate.sensor_longitude
    sensorUpdate.sensor_latitude = sensorData.sensor_latitude || sensorUpdate.sensor_latitude
  
    res.status(201).json(sensorUpdate)
});

function validateDeletion(req, res, next) {
    const sensorId = req.params.id
    const sensorDelete = sensors.find((sensor) => sensor.sensor_id === parseInt(sensorId));
    if (!sensorDelete) {
      return res.status(400).send('Data tidak ditemukan');
    }
    if (sensorDelete.sensor_id === 2) {
      return res.status(400).send('Data dengan sensor_id 2 tidak dapat dihapus');
    }
    next();
}
  
router.delete('/sensor/:id', validateDeletion, (req, res) => {
    const sensorId = req.params.id

    const sensorIndex = sensors.findIndex((sensor) => sensor.sensor_id === parseInt(sensorId))
  
    if (sensorIndex === -1) {
      return res.status(404).json({ error: 'Data tidak ditemukan' })
    }

    sensors.splice(sensorIndex, 1)
  
    res.status(200).json({ message: 'Data berhasil dihapus' })
});

module.exports = router
