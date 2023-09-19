const express = require('express');
const cors = require('cors');
const pool = require('./db'); 

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

// projects Routes
app.get('/projects', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM projects');
    res.json(rows);
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
// projects Routes
app.get('/services', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM services');
    res.json(rows);
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
