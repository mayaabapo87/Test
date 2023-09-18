const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const app = express();
const port = 3000;


const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'apollo',
  password: 'qwerty12731.',
  port: 5432, 
});

app.use(express.json());


app.use(cors()); 


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
