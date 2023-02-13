const express = require("express");
const eventController = require("./controllers/eventController");
const userController = require("./controllers/userController");
const router = express.Router();


router.get("/users", userController.displayAllUsers);

router.get("/events/:id", eventController.displayEvent)

module.exports = router;
