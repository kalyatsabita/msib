const express = require('express');
const app = express();
const db = require("./models");
const userRoute = require('./routes/user.route');
// const deviceRoute = require("./routes/device.route");
// const deviceDataRoute = require("./routes/device-data.route");

app.use(express.json());

// db.sequelize.sync();

db.sequelize
    .authenticate()
    .then(() => {
        console.log('Koneksi ke database berhasil.');
    })
    .catch(err => {
        console.error('Gagal koneksi ke database: ', err);
    });

db.sequelize
    .sync({
        force: false, // To create table if exists
        alter: true // To update the table if exists
    })
    .then(() => {
        console.log("Database tersinkronisasi.");
    })
    .catch((err) => {
        console.log("Gagal sinkronisasi ke database: " + err.message);
    });

app.get('/', (req, res) => {
    return res.status(200)
        .json({
            message: "Selamat datang di aplikasi Node.js + Express.js + Sequelize ORM + MySQL."
        });
});

app.use(userRoute);
// app.use(deviceRoute);
// app.use(deviceDataRoute);

const port = 8000;

app.listen(port, () => {
    console.log(`Server started on port : ${port}`);
})

// const express = require('express');

// const app = express();

// const db = require("./models");

// const userRoute = require("./routes/user.route");
// const deviceRoute = require("./routes/device.route");
// const deviceDataRoute = require("./routes/device-data.route");

// app.use(express.json());

// db.sequelize
//     .authenticate()
//     .then(() => {
//         console.log('Koneksi ke database berhasil.');
//     })
//     .catch(err => {
//         console.error('Gagal koneksi ke database: ', err);
//     });

// // db.sequelize
// //     .sync({
// //         force: false, // To create table if exists
// //         alter: true // To update the table if exists
// //     })
// //     .then(() => {
// //         console.log("Database tersinkronisasi.");
// //     })
// //     .catch((err) => {
// //         console.log("Gagal sinkronisasi ke database: " + err.message);
// //     });

// app.get('/', (req, res) => {
//     return res.status(200)
//         .json({
//             message: "Selamat datang di aplikasi Node.js + Express.js + Sequelize ORM + MySQL."
//         });
// });

// app.use(userRoute);
// app.use(deviceRoute);
// app.use(deviceDataRoute);

// const port = 8000;

// app.listen(port, () => {
//     console.log(`Server started on port ${port}`);
// });