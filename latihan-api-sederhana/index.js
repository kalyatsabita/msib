// memanggil modul expressjs
const express = require('express');

// memanggil route/rute yang sudah dibuat di folder routes
const userRoute = require('./routes/user.route')

// set app dengan expressjs
const app = express();

// set json sebagai pertukaran data
app.use(express.json());

// set route user  di app
app.use(userRoute)

// define port untuk akses ke api
const port = 8000;

// run app
app.listen(port, () => {
    console.log('Server started on port : '+ port);
    console.log(`Server started on port : ${port}`);
});