const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const passRouter = require("./routes/passRoutes");
const fileRouter = require("./routes/fileRoutes");

mongoose.set("strictQuery", false);

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3080;

const user = process.env.USER;
const pass = process.env.PASS;
const cluster = process.env.CLUSTER;
const name = process.env.NAME;

// Connection to the MongoDB database
mongoose.connect(
  `mongodb+srv://${user}:${pass}@${cluster}.mdgajbf.mongodb.net/${name}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: false
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

// Routes
app.use('/passes', passRouter);
app.use('/', fileRouter);

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});