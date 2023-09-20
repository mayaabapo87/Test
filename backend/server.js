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

const projectsRoutes = require('./projects');
const servicesRoutes = require('./services');


app.use('/', projectsRoutes);
app.use('/', servicesRoutes);


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
