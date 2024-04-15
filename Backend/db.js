const mongoose = require("mongoose");

// const mongoURL = "mongodb+srv://vm8118134:123vivek@cluster0.ffzhkmj.mongodb.net/";
const mongoURL =
  "mongodb+srv://kaneki003:123saksham@cluster01.ufxundd.mongodb.net/";

// const mongoURL = process.env.mongoURL;

mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("connected", () => {
  console.log("connected to mongodb server");
});
db.on("disconnected", () => {
  console.log("disconnected to mongodb server");
});
db.on("error", (err) => {
  console.log("error while connnecting to mongodb", err);
});

module.exports = db;
