const express = require('express');
const app = express();
const Perangkat = require('./models');

app.use(express.json());

// db.sequelize
    // .authenticate()
    // .then(() => {
    //     console.log('Koneksi ke database berhasil');
    // })
    // .catch(err => {
    //     console.log('Gagal koneksi ke database', err);
    // })

// (async () => {
//     await Perangkat.sync({ force: true }); // force: true akan menjatuhkan tabel yang sudah ada
//     console.log('Tabel Perangkat telah dibuat atau disinkronkan.');
// })();

const port = 8000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})