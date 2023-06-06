const express = require("express");
const messageRoutes = require("../../controllers/messageController");
const categoryRoutes = require("../../controllers/categoryController");
const logsRoutes = require("../../controllers/logController");
const router = express.Router();

router.post("/create", messageRoutes.sendNewMessage);
router.get("/categories", categoryRoutes.categoryController);
router.get("/logs", logsRoutes.getLogs);

module.exports = router;