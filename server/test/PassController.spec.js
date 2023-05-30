const PassForm = require("../models/passModel");
const passController = require("../controllers/passController");
const { ObjectId } = require("mongodb");

describe("createPass", () => {
  it("should create a new pass", async () => {
    // Mock request and response objects
    const req = {
      body: {
          "remarks": "Sample remarks",
          "nature": {
            "type": "sales",
            "spec": "Sample specification",
            "_reqs": "xuor",
            "orn": "Sample ornament"
          },
          "reqs_uploaded": false,
          "ptcs": [
            {
              "item": "Sample item 1",
              "tag": "Sample tag 1",
              "num": 1,
              "amt": 10.99
            },
            {
              "item": "Sample item 2",
              "tag": "Sample tag 2",
              "num": 2,
              "amt": 19.99
            }
          ],
          "req": {
            "name": "Sample requester",
            "sign": "Sample requester signature"
          },
          "ver": {
            "title": "Sample verifier title",
            "name": "Sample verifier name",
            "sign": "Sample verifier signature",
            "signed": true
          },
          "appr": [
            {
              "title": "Sample approver 1 title",
              "name": "Sample approver 1 name",
              "approved": true
            },
            {
              "title": "Sample approver 2 title",
              "name": "Sample approver 2 name",
              "approved": false
            }
          ],
          "rcv": {
            "name": "Sample receiver",
            "sign": "Sample receiver signature",
            "signed": false
          },
          "done": false
        }
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };

    // Mock the save method of PassForm model
    PassForm.prototype.save = jest.fn().mockResolvedValueOnce(req.body);

    // Call the createPass function
    await passController.createPass(req, res);
    
    // Assertions
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.send).toHaveBeenCalledWith(expect.objectContaining({
      _id: expect.any(ObjectId),
    }));
    expect(PassForm.prototype.save).toHaveBeenCalledTimes(1);
  });

  it("should handle errors during pass creation", async () => {
    // Mock request and response objects
    const req = {
      body:
        {}
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };

    // Mock the save method of PassForm model to throw an error
    PassForm.prototype.save = jest.fn().mockRejectedValueOnce(new Error("Failed to create pass"));

    // Call the createPass function
    await passController.createPass(req, res);

    // Assertions
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.send).toHaveBeenCalledWith({
      error: "Failed to create pass",
      message: "Failed to create pass",
    });
    expect(PassForm.prototype.save).toHaveBeenCalledTimes(1);
  });
});

describe('checkPassApproval', () => {
  it('should return "approved" when pass is fully approved', async () => {
    // Mock the required objects and functions
    const passId = '6460b4f2f513997f56b7019c';
    const req = { params: { passId } };
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn()
    };
    const findByIdMock = jest.fn().mockResolvedValueOnce({
      _id: passId,
      reqs_uploaded: true,
      rcv: { signed: true },
      appr: [{ approved: true }],
      ver: { signed: true },
      done: true,
      save: jest.fn()
    });

    // Mock the PassForm.findById function
    PassForm.findById = findByIdMock;

    // Call the checkPassApproval function
    await passController.checkPassApproval(req, res);

    // Verify the expected behavior
    expect(PassForm.findById).toHaveBeenCalledWith(passId);
    expect(res.send).toHaveBeenCalledWith({ message: 'approved' });
  }, 20000);
});

describe('getAllPasses', () => {
  it('should return all passes', async () => {
    // Mock the required objects and functions
    const passes = [
      { passId: 1, name: 'Pass 1' },
      { passId: 2, name: 'Pass 2' },
      { passId: 3, name: 'Pass 3' }
    ];

    // Mock the PassForm.find function
    PassForm.find = jest.fn().mockResolvedValueOnce(passes);

    // Create mock response objects
    const req = {};
    const res = { send: jest.fn() };

    // Call the getAllPasses function
    await passController.getAllPasses(req, res);

    // Verify the expected behavior
    expect(PassForm.find).toHaveBeenCalled();
    expect(res.send).toHaveBeenCalledWith(passes);
  }, 20000);
});
