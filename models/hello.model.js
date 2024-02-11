const mongoose = require("mongoose");

const helloWorldSchema = mongoose.Schema({
  _id: { type: mongoose.Types.ObjectId, auto: true },
  message: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("hello_world_1", helloWorldSchema);
