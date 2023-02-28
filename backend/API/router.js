const express = require("express");
const eventController = require("./controllers/eventController");
const userController = require("./controllers/userController");
const mainController = require("./controllers/mainController");
const router = express.Router();

router.get("/users", userController.displayAllUsers);
router.get("/votes", eventController.displayEvents);

router.get("/users/:mail", userController.displayUser);
router.get("/event/:id", eventController.displayEvent);
router.get("/event/:eventId/user/:userId", eventController.displayEventUser);

router.post("/vote/:id", eventController.updateOneEvent);
router.post("/event/:eventId/user/:userId", eventController.updateEventUser);

router.post("/login", mainController.loginVerif);
router.post("/users/:id", userController.updateUser);

module.exports = router;
