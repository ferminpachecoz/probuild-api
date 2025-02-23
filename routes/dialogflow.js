const express = require("express");
const router = express.Router();
const dialogflowController = require("../controllers/dialogflowController");

router.post("/dialogflow-webhook", dialogflowController.handleDialogflowRequest);

module.exports = router;
