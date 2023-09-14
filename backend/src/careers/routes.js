const { Router } = require('express');
const controller = require('./controller');
const router = Router();

router.get('/careers', controller.getCareers);
router.get('/careers/:id', controller.getCareerById);
router.get('/partners', controller.getPartners);
router.get('/partner/:id', controller.getPartnerById);
router.get('/stories', controller.getStories);
router.get('/story/:id', controller.getStoryById);


module.exports = router;