const express = require('express');
const { Pool } = require('pg');
const router = express.Router();
const pool = require('../db');
const createDOMPurify = require('dompurify');
const { JSDOM } = require('jsdom');


const window = new JSDOM('').window;
const DOMPurify = createDOMPurify(window);

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

    const sanitizedTitle = DOMPurify.sanitize(title);
    const sanitizedshortDescription = DOMPurify.sanitize(shortdescription);
    const sanitizedDetails = DOMPurify.sanitize(details);
    
    await pool.query(
      'INSERT INTO projects (title, image, shortdescription, details) VALUES ($1, $2, $3, $4)',
      [sanitizedTitle, image, sanitizedshortDescription, sanitizedDetails]
    );
    res.redirect('/manage-projects?notification=Project added successfully');
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

    const updatedTitle = DOMPurify.sanitize(newTitle || existingProject.rows[0].title);
    const updatedImage = newImage || existingProject.rows[0].image;
    const updatedShortDescription = DOMPurify.sanitize(newShortDescription || existingProject.rows[0].shortdescription);
    const updatedDetails = DOMPurify.sanitize(newDetails || existingProject.rows[0].details);
   

    await pool.query(
      'UPDATE projects SET title = $1, image = $2, shortdescription = $3, details = $4 WHERE id = $5',
      [updatedTitle, updatedImage, updatedShortDescription, updatedDetails, projectId]
    );

    res.redirect('/manage-projects?notification=Project updated successfully');
  } catch (error) {
    console.error('Error updating project', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


router.post('/deleteProject/:id', async (req, res) => {
  const projectId = req.params.id;

  try {
    await pool.query('DELETE FROM projects WHERE id = $1', [projectId]);
    res.redirect('/manage-projects?notification=Project deleted successfully');
  } catch (error) {
    console.error('Error deleting project', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;