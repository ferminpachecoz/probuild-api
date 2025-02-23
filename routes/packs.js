const express = require('express');
const router = express.Router();
const packsController = require('../controllers/packsController');

router.get('/', packsController.getAllPacks);
router.get('/:name', packsController.getPackByName);

module.exports = router;
