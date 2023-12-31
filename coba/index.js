const express = require("express")
const weather = require('./weather.route');
const app = express();

app.use(express.json());
app.use(weather);


const PORT = 3000;

app.listen(PORT, () => {
    console.log(`api started at ${PORT}`);
});