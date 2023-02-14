const express = require("express");
const eventController = require("./controllers/eventController");
const userController = require("./controllers/userController");
const mainController = require("./controllers/mainController");
const router = express.Router();

router.get("/users", userController.displayAllUsers);

router.get("/events/:id", eventController.displayEvent);

router.post("/login", mainController.loginVerif);

module.exports = router;
