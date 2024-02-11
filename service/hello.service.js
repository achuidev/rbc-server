const HelloWorld = require("../models/hello.model");

const greetUser = async (req, res) => {
  try {
    const greeting = await HelloWorld.findOne({});
    res
      .status(200)
      .send({ message: greeting ? greeting.message : "Hello World" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error." });
  }
};

const createMessage = async (req, res) => {
  try {
    const newMessage = new HelloWorld({
      message: "This is a new message",
    });
    await newMessage.save();
    res.status(201).json({ message: "Message created Successfully" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

module.exports.greetUser = greetUser;
module.exports.createMessage = createMessage;
