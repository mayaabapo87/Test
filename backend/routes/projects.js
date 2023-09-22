const express = require('express');
const { Pool } = require('pg');
const router = express.Router();
const pool = require('../db');

router.get('/projects', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM projects');
    res.json(rows);
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/admin-projects', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM projects');
    const notification = req.query.notification;
    res.render('admin-projects', { projects: rows, notification });
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/addProject', async (req, res) => {
  const { title, image, shortdescription, details } = req.body;

  try {
    await pool.query(
      'INSERT INTO projects (title, image, shortdescription, details) VALUES ($1, $2, $3, $4)',
      [title, image, shortdescription, details]
    );
    res.redirect('/admin?notification=Project added successfully');
  } catch (error) {
    console.error('Error adding project', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/updateProject/:id', async (req, res) => {
  const projectId = req.params.id;
  const { newTitle, newImage, newShortDescription, newDetails } = req.body;

  try {
    const existingProject = await pool.query('SELECT * FROM projects WHERE id = $1', [projectId]);

    const updatedTitle = newTitle || existingProject.rows[0].title;
    const updatedImage = newImage || existingProject.rows[0].image;
    const updatedShortDescription = newShortDescription || existingProject.rows[0].shortdescription;
    const updatedDetails = newDetails || existingProject.rows[0].details;

    await pool.query(
      'UPDATE projects SET title = $1, image = $2, shortdescription = $3, details = $4 WHERE id = $5',
      [updatedTitle, updatedImage, updatedShortDescription, updatedDetails, projectId]
    );

    res.redirect('/admin?notification=Project updated successfully');
  } catch (error) {
    console.error('Error updating project', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


router.post('/deleteProject/:id', async (req, res) => {
  const projectId = req.params.id;

  try {
    await pool.query('DELETE FROM projects WHERE id = $1', [projectId]);
    res.redirect('/admin?notification=Project deleted successfully');
  } catch (error) {
    console.error('Error deleting project', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
