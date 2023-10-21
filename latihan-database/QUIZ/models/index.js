const dbConfig = require('../config/db.config');

const Sequelize = require('sequelize');

const sequelize = new Sequelize (
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect: dbConfig.DIALECT,
        port: dbConfig.PORT,
        define: {
            timestamps: false,
            freezeTableName: true
        },
        logging: false
    }
);

// const db = {};
// const Perangkat = require('./perangkat.model');

// db.Sequelize = Sequelize;
// db.sequelize = sequelize;

// db.perangkatModel = require('./perangkat.model')(sequelize, Sequelize);

// module.exports = db;

// Import Sequelize
// const Sequelize = require("sequelize");

// Create a new Sequelize instance
// const sequelize = new Sequelize("database", "username", "password", {
//   dialect: "mysql",
// });

// Define the model
const Perangkat = sequelize.define("perangkat", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    required: true,
  },
  type: {
    type: Sequelize.INTEGER,
    required: true,
  },
  longitude: {
    type: Sequelize.DECIMAL(10, 6),
  },
  latitude: {
    type: Sequelize.DECIMAL(10, 6),
  },
});

// Sync the model to the database
Perangkat.sync()
    .then(() => {
    console.log('Tabel Perangkat telah dibuat');
  })
    .catch(err => {
    console.error('Gagal membuat tabel Perangkat:', err);
  });
  (async () => {
    await Perangkat.sync({ force: true }); // force: true akan menjatuhkan tabel yang sudah ada
    console.log('Tabel Perangkat telah dibuat atau disinkronkan.');
})();

//   const perangkat = new Perangkat({
//     name: "Perangkat 1",
//     type: 1,
//     longitude: 123.456,
//     latitude: 78.901,
//   });
  
//   perangkat.save();  
// Export the model
module.exports = Perangkat;