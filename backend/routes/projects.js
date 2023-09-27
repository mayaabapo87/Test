const express = require('express');
const router = express.Router();
const Project = require('../models/projectsModel');

// route to get all projects
router.get('/projects', async (req, res) => {
  try {
    const projects = await Project.findAll();
    res.json(projects);
  } catch (error) {
    console.error('Error fetching projects', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET projects for admin view
router.get('/admin-projects', async (req, res) => {
  try {
    const projects = await Project.findAll({
      order: [['id']], 
    });
    const notification = req.query.notification;
    res.render('admin-projects', { projects, notification });
  } catch (error) {
    console.error('Error fetching project', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


// POST to add a new project
router.post('/addProject', async (req, res) => {
  const { title, image, shortdescription, details } = req.body;

  try {
    const newProjects = await Project.create({ title, image, shortdescription, details });
    res.redirect('/manage-projects?notification=Project added successfully');
  } catch (error) {
    console.error('Error adding project', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST to update a project
router.post('/updateProject/:id', async (req, res) => {
  const projectId = req.params.id;
  const { newTitle, newImage, newShortDescription, newDetails } = req.body;

  try {
    const projectsToUpdate = await Project.findByPk(projectId);

    if (!projectsToUpdate) {
      return res.status(404).json({ error: 'Projects not found' });
    }

    projectsToUpdate.title = newTitle;
    projectsToUpdate.image = newImage;
    projectsToUpdate.shortdescription = newShortDescription;
    projectsToUpdate.details = newDetails;

    await projectsToUpdate.save();

    res.redirect('/manage-projects?notification=Project updated successfully');
  } catch (error) {
    console.error('Error updating service', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST to delete a project
router.post('/deleteProject/:id', async (req, res) => {
  const projectId = req.params.id;

  try {
    const projectToDelete = await Project.findByPk(projectId);

    if (!projectToDelete) {
      return res.status(404).json({ error: 'Project not found' });
    }

    await projectToDelete.destroy();
    res.redirect('/manage-projects?notification=Project deleted successfully');
  } catch (error) {
    console.error('Error deleting project', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;