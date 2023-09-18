const express = require('express');
const { Pool } = require('pg');
const cors = require('cors'); // Import the cors middleware
const app = express();
const port = 3000;

// PostgreSQL database configuration
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'apollo',
  password: 'qwerty12731.',
  port: 5432, // PostgreSQL default port
});

app.use(express.json());

// Add the cors middleware here
app.use(cors()); // This allows all CORS requests. You can configure it for specific origins if needed.

// Define a route to fetch project data from the database
app.get('/projects', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM projects');
    res.json(rows);
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
