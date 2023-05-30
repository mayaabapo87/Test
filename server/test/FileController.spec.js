const File = require('../models/fileModel');
const PassForm = require('../models/passModel');
const fileController = require("../controllers/fileController");

describe('uploadFile', () => {
    it('should upload a file and update the pass document', async () => {
      // Mock the required objects and functions
      const passId = 'passId123';
      const req = {
        file: {
          originalname: 'testFile.txt',
          buffer: Buffer.from('file content'),
          mimetype: 'text/plain'
        },
        params: { passId }
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn()
      };
      const saveMock = jest.fn().mockResolvedValueOnce();
      const findByIdMock = jest.fn().mockResolvedValueOnce({
        _id: passId,
        reqs_uploaded: false,
        save: saveMock
      });
  
      // Mock the File.save function
      File.prototype.save = jest.fn();
  
      // Mock the PassForm.findById function
      PassForm.findById = findByIdMock;
  
      // Call the uploadFile function
      await fileController.uploadFile(req, res);
  
      // Verify the expected behavior
      expect(File.prototype.save).toHaveBeenCalled();
      expect(findByIdMock).toHaveBeenCalledWith(passId);
      expect(saveMock).toHaveBeenCalled();
      expect(res.send).toHaveBeenCalledWith(`File uploaded successfully to ${passId}`);
    });
  });
  
describe('getFile', () => {
    it('should retrieve a file by pass ID', async () => {
        // Mock the required objects and functions
        const passId = 'passId123';
        const req = { params: { passId } };
        const res = {
        set: jest.fn().mockReturnThis(),
        send: jest.fn()
        };
        const findOneMock = jest.fn().mockResolvedValueOnce({
        contentType: 'text/plain',
        data: Buffer.from('file content')
        });

        // Mock the File.findOne function
        File.findOne = findOneMock;

        // Call the getFile function
        await fileController.getFile(req, res);

        // Verify the expected behavior
        expect(File.findOne).toHaveBeenCalledWith({ pass: passId });
        expect(res.set).toHaveBeenCalledWith('Content-Type', 'text/plain');
        expect(res.send).toHaveBeenCalledWith(Buffer.from('file content'));
    });
});
  
describe('deleteFile', () => {
    it('should delete a file and update the pass document', async () => {
      // Mock the required objects and functions
      const passId = 'passId123';
      const req = { params: { passId } };
      const res = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn()
      };
      const findOneAndDeleteMock = jest.fn().mockResolvedValueOnce({});
      const findOneAndUpdateMock = jest.fn().mockResolvedValueOnce({});
  
      // Mock the File.findOneAndDelete function
      File.findOneAndDelete = findOneAndDeleteMock;
  
      // Mock the PassForm.findOneAndUpdate function
      PassForm.findOneAndUpdate = findOneAndUpdateMock;
  
      // Call the deleteFile function
      await fileController.deleteFile(req, res);
  
      // Verify the expected behavior
      expect(File.findOneAndDelete).toHaveBeenCalledWith({ pass: passId });
      expect(PassForm.findOneAndUpdate).toHaveBeenCalledWith(
        { _id: passId },
        { reqs_uploaded: false },
        { new: true }
      );
      expect(res.send).toHaveBeenCalledWith({ message: 'File deleted successfully' });
    });
  });
  
  