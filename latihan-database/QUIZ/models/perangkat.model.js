// const { DataTypes } = require('sequelize');
// const sequelize = new Sequelize('database', 'username', 'password', {
//   host: 'localhost',
//   dialect: 'mysql' // ganti dengan dialect database yang sesuai (misal: postgres, sqlite)
// });

// const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => { 
const Perangkat = sequelize.define('perangkat', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  type: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  longitude: {
    type: Sequelize.DECIMAL(10, 6),
    allowNull: true
  },
  latitude: {
    type: Sequelize.DECIMAL(10, 6),
    allowNull: true
  }
});
};
// Sinkronkan model dengan basis data
Perangkat.sync()
  .then(() => {
    console.log('Tabel Perangkat telah dibuat');
  })
  .catch(err => {
    console.error('Gagal membuat tabel Perangkat:', err);
  });

module.exports = Perangkat;