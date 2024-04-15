const connectToMongo = require("./db");
const express = require("express");
const app = express();
var cors = require("cors");
const UserRoutes = require("./routes/Userroutes");
const ItemRoutes=require("./routes/Itemroutes");

const PORT = 5000;
app.use(express.json());
app.use(cors());
app.use("/api/user", UserRoutes);
app.use("/api/item", ItemRoutes);

app.get("/", function (req, res) {
  res.send("server is up and running");
});

const server = app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`);
});
