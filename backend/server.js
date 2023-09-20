const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.json());
app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Import the route files
const projectsRoutes = require('./projects');
const servicesRoutes = require('./services');

// Use the routes
app.use('/', projectsRoutes);
app.use('/', servicesRoutes);

// Add more routes as needed

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
