const mongoose = require("mongoose");
  const { Schema } = mongoose;

const userModel = new Schema(
  {
    name:{ 
        type:String,
         required:true
    },
    email:{ 
       type:String,
       required:true,
       unique:true
     },
    number: {
        type:Number,
      //  required:true,
    },
    branch: {
        type:String,
        // required:true
    },
    year: {
        type:Number,
        // required:true
    },
    selling_items:[{
        type: mongoose.Schema.Types.ObjectId, ref: "Item"
    }],
    pic: {
        type:String,
       default:"https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
    },
   
  },
  { timestamps: true }
);

const User = mongoose.model("User", userModel);

module.exports = User;