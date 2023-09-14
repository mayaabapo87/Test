const express = require("express");
const careerRoutes = require('./src/careers/routes');

const dotenv = require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

// Enable CORS for all routes
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });
  
app.use(express.json());

app.listen(port, () => {
    console.log(`Sever running on port ${port}`);
});

app.get("/", (req, res) => {
    res.send("HI");
})

app.use('/api/careers', careerRoutes);