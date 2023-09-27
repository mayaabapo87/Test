const express = require('express');
const router = express.Router();
const Service = require('../models/servicesModel');

// route to get all services
router.get('/services', async (req, res) => {
  try {
    const services = await Service.findAll();
    res.json(services);
  } catch (error) {
    console.error('Error fetching services:', error.message); 
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET services for admin view
router.get('/admin-services', async (req, res) => {
  try {
    const services = await Service.findAll();
    const notification = req.query.notification;
    res.render('admin-services', { services, notification });
  } catch (error) {
    console.error('Error fetching services', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST to add a new service
router.post('/addService', async (req, res) => {
  const { title, image, details } = req.body;

  try {
    const newService = await Service.create({ title, image, details });
    res.redirect('/manage-services?notification=Service added successfully');
  } catch (error) {
    console.error('Error adding service', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


// POST to update a service
router.post('/updateService/:id', async (req, res) => {
  const serviceId = req.params.id;
  const { newTitle, newImage, newDetails } = req.body;

  try {
    const serviceToUpdate = await Service.findByPk(serviceId);

    if (!serviceToUpdate) {
      return res.status(404).json({ error: 'Service not found' });
    }

    serviceToUpdate.title = newTitle;
    serviceToUpdate.image = newImage;
    serviceToUpdate.details = newDetails;

    await serviceToUpdate.save();

    res.redirect('/manage-services?notification=Service updated successfully');
  } catch (error) {
    console.error('Error updating service', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST to delete a service
router.post('/deleteService/:id', async (req, res) => {
  const serviceId = req.params.id;

  try {
    const serviceToDelete = await Service.findByPk(serviceId);

    if (!serviceToDelete) {
      return res.status(404).json({ error: 'Service not found' });
    }

    await serviceToDelete.destroy();
    res.redirect('/manage-services?notification=Service deleted successfully');
  } catch (error) {
    console.error('Error deleting service', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
module.exports = router;
