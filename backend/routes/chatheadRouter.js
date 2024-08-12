const { Router } = require("express");
const chatHeadRouter = Router();
const chatHeadController = require("../controllers/chatHeadController");

chatHeadRouter.get("/:chatHeadName", chatHeadController.getchatHead);

module.exports = chatHeadRouter;