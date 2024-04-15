const express = require("express");
const router = express.Router();
const User = require("../models/User");
var jwt = require("jsonwebtoken");
// const { allUsers, UpdateUser } = require("../controllers/userController");
const JWT_SECRET = "Flutio@5665#";
const { UpdateUser } = require("../Controllers/UserController");
const { protect } = require("../MiddleWare/Authmiddleware");
// const cloudinary = require("../Cloudinary");

//ROUTE 1:end point for creating new user in db
router.post("/", async (req, res) => {
  let success = false;
  let user = await User.findOne({ email: req.body.email });
  if (user) {
    const { email } = req.body;
    try {
      let user = await User.findOne({ email }).populate("selling_items");
      const data1 = {
        user: {
          id: user.id,
        },
      };
      const auhToken = jwt.sign(data1, JWT_SECRET);
      success = true;
      res.json({ success, auhToken, user });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("internal server error");
    }
  } else {
    try {
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        branch: req.body.branch,
      });

      const data = {
        user: {
          id: user._id,
        },
      };
      const auhToken = jwt.sign(data, JWT_SECRET);
      success = true;
      res.json({ success, auhToken, user });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some error occured");
    }
  }
});


router.route("/update").put(protect, UpdateUser);

module.exports = router;
