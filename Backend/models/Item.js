const mongoose = require("mongoose");
const { Schema } = mongoose;

const itemModel = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    isNegotiable: {
      type: Boolean,
      default: true,
    },
    isSold: {
      type: Boolean,
      default: false,
    },
    description: {
      type: String,
      required: true,
    },
    pic: 
      {
        type: String,
        // required:true
      },
    category: {
      type: String,
      required: true,
    },
    userid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Item = mongoose.model("Item", itemModel);

module.exports = Item;
