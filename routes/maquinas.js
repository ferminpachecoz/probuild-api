const express = require('express');
const router = express.Router();
const maquinasController = require('../controllers/maquinasController.js');

router.get('/', maquinasController.getAllMachines);
router.get('/search/:query', maquinasController.searchMachines);
router.get('/:name', maquinasController.getMachineByName);

module.exports = router;
