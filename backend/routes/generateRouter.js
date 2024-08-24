const { Router } = require("express");
const generateRouter = Router();
const generateController = require("../controllers/generateController");

generateRouter.post("/", generateController.generate);

module.exports = generateRouter;