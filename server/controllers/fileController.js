const File = require('../models/fileModel');
const PassForm = require('../models/passModel');

// File upload controller
exports.uploadFile = async (req, res) => {
  try {
    const { originalname, buffer, mimetype } = req.file;
    const passId = req.params.passId;

    // Create a new file document
    const file = new File({
      filename: originalname,
      data: buffer,
      contentType: mimetype,
      pass: passId, // Set the pass ID for the file
    });

    // Save the file document to the database
    await file.save();

    const pass = await PassForm.findById(passId);
    if (!pass) {
      res.status(404).send({ message: 'Pass not found' });
      return;
    }

    if (!pass.reqs_uploaded) {
      pass.reqs_uploaded = true; // Set the 'done' field to true
      await pass.save();
    }

    res.send(`File uploaded successfully to ${passId}`);
  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).send('File upload failed');
  }
};

// Get files by pass ID controller
exports.getFile = async (req, res) => {
  const passId = req.params.passId;

  try {
    // Find files associated with the given pass ID
    const file = await File.findOne({ pass: passId });
    if (!file) {
      return res.status(404).send('File not found');
    }
    
    res.set('Content-Type', file.contentType);
    res.send(file.data);
  } catch (error) {
    console.error('Error retrieving file:', error);
    res.status(500).send('Failed to retrieve file');
  }
};

