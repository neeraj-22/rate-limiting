const express = require("express");
const rateLimit = require("express-rate-limit");

const app = express();

const port = 3000;

const limiter = rateLimit({
    windowMs : 15*60*1000,
    max:5,
    message:"Ruko Zara! Sabar Karo!"
})

app.use(limiter);

app.get("/", (req, res) => {
    res.send("HEYYY")
})

app.listen(port, (req, res) => {
    console.log(`App listening on : localhost:${port}` )
})