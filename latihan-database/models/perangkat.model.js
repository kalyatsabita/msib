// const sequelize = new Sequelize("database", "username", "password", {
//     dialect: "mysql",
//   });
module.exports = (sequelize, Sequelize) => {
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
}
Perangkat.sync()
  .then(() => {
    console.log('Tabel Perangkat telah dibuat');
  })
  .catch(err => {
    console.error('Gagal membuat tabel Perangkat:', err);
  });

// module.exports = Perangkat;