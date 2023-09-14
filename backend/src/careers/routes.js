const { Router } = require('express');
const controller = require('./controller');
const router = Router();

router.get('/', controller.getCareers);
router.get('/:id', controller.getCareerById);

module.exports = router;