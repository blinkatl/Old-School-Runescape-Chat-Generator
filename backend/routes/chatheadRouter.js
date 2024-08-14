const { Router } = require("express");
const chatHeadRouter = Router();
const chatHeadController = require("../controllers/chatHeadController");

chatHeadRouter.get("/search", chatHeadController.search);
chatHeadRouter.get("/:chatHeadName", chatHeadController.getChathead);

module.exports = chatHeadRouter;