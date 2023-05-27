const express = require('express');
const router = express.Router();
const fileController = require('../controllers/fileController');
const multer = require('multer');
const upload = multer();

// File upload route
router.post('/upload/:passId', upload.single('file'), fileController.uploadFile);

// Retrieve files associated with a specific pass ID
router.get('/:passId', fileController.getFile);

module.exports = router;
