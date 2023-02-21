const express = require("express");
const eventController = require("./controllers/eventController");
const userController = require("./controllers/userController");
const mainController = require("./controllers/mainController");
const router = express.Router();

router.get("/users", userController.displayAllUsers);
router.get("/votes", eventController.displayEvents);

router.get("/event/:id", eventController.displayEvent);

router.post("/vote/:id", eventController.updateOneEvent);
router.post("/login", mainController.loginVerif);

module.exports = router;
