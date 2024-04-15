const User = require("../models/User");
const cloudinary = require("../Cloudinary");
const Asynchandler = require("express-async-handler");

const UpdateUser = Asynchandler(async (req, res) => {
  const { pic, number } = req.body;

  let Url;

    if(pic){  const result = await cloudinary.uploader.upload(pic, {
        folder: "UsersImage",
      });
      Url = result.url;
      console.log(result);}

      let Payload = {}
      if(number){
        Payload.number=number;
      }
      if(pic){
        Payload.pic=Url
      }

  const user = await User.findByIdAndUpdate(req.user._id, 
    Payload
  );

  user.save();
  if (!user) {
    return "User not found..";
  } else {
    res.json(user);
  }
});
module.exports = { UpdateUser };
