const express = require("express");
const helloService = require("../service/hello.service");

const router = express.Router();

router.get("/greet", helloService.greetUser);
router.post("/createMessage", helloService.createMessage);

module.exports = router;
