const express = require('express');
const { Pool } = require('pg');
const router = express.Router();
const pool = require('../db');

router.get('/services', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM services');
    res.json(rows);
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/admin-services', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM services');
    const notification = req.query.notification;
    res.render('admin-services', { services: rows, notification });
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/addService', async (req, res) => {
  const { title, image, details } = req.body;

  try {
    await pool.query(
      'INSERT INTO services (title, image, details) VALUES ($1, $2, $3)',
      [title, image, details]
    );
    res.redirect('/admin?notification=Service added successfully');
  } catch (error) {
    console.error('Error adding service', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/updateService/:id', async (req, res) => {
  const serviceId = req.params.id;
  const { newTitle, newImage, newDetails } = req.body;

  try {
    const existingService = await pool.query('SELECT * FROM services WHERE id = $1', [serviceId]);

    const updatedTitle = newTitle || existingService.rows[0].title;
    const updatedImage = newImage || existingService.rows[0].image;
    const updatedDetails = newDetails || existingService.rows[0].details;

    await pool.query(
      'UPDATE services SET title = $1, image = $2, details = $3 WHERE id = $4',
      [updatedTitle, updatedImage, updatedDetails, serviceId]
    );

    res.redirect('/admin?notification=Service updated successfully');
  } catch (error) {
    console.error('Error updating service', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/deleteService/:id', async (req, res) => {
  const serviceId = req.params.id;

  try {
    await pool.query('DELETE FROM services WHERE id = $1', [serviceId]);
    res.redirect('/admin?notification=Service deleted successfully');
  } catch (error) {
    console.error('Error deleting service', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
