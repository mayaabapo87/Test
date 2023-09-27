const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

const projectsRoutes = require('./routes/projects');
const servicesRoutes = require('./routes/services');

app.use('/', projectsRoutes);
app.use('/', servicesRoutes);

app.get('/manage-services', (req, res) => {
  const notification = req.query.notification;
  res.render('admin-dashboard', { notification });
});
app.get('/manage-projects', (req, res) => {
  const notification = req.query.notification;
  res.render('admin-dashboard', { notification });
  
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
