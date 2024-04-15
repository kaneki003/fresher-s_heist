const Item = require("../models/Item");
const User = require("../models/User");
const Asynchandler = require("express-async-handler");
const cloudinary = require("../Cloudinary");

const UpdateItem = Asynchandler(async (req, res) => {
  const { itemId } = req.body;
  const item = await Item.findByIdAndUpdate({ _id: itemId }, { isSold: true }).populate("userid");

  if (!item) {
    return "item does not exist..";
  } else {
    res.json(item);
  }
});

const UplodItem = Asynchandler(async (req, res) => {
  const {
    name,
    price,
    isNegotiable,
    isSold,
    description,
    pic,
    category,
    userid,
  } = req.body;
  let Url;

  const result = await cloudinary.uploader.upload(pic, {
    folder: "UsersImage",
  });
  Url = result.url;
  console.log(result);

  const item = await Item.create({
    name: name,
    price: price,
    isNegotiable: isNegotiable,
    description: description,
    pic: Url,
    category: category,
    userid: req.user._id,
  });

  const user = await User.findByIdAndUpdate(req.user._id, {
    $push: { selling_items: item._id },
  });

  const popItem = await Item.findOne({ _id: item._id }).populate("userid");

  if (!item) {
    return "item not created..";
  } else {
    res.json(popItem);
  }
});


const SearchItem = Asynchandler(async (req, res) => {
  const keyword = req.query.search
    ? {
        $or: [
          { name: { $regex: req.query.search, $options: "i" } },
          { category: { $regex: req.query.search, $options: "i" } },
        ],
      }
    : {};

  const items = await Item.find(keyword).populate("userid");
  res.send(items);
});

const FetchAllItems = Asynchandler(async (req, res) => {
  try {
    const items = await Item.find({}).populate("userid"); // Empty query to fetch all documents
    res.json(items);
  } catch (error) {
    res.json(error.message);
  }
});

const DeleteItem = Asynchandler(async (req, res) => {
  try {
    const { itemId } = req.body;
    const item = await Item.findByIdAndDelete((_id = itemId));
    res.json(item)
  } catch (error) {
    res.json(error.message);
  }
});

module.exports = {
  UplodItem,
  UpdateItem,
  SearchItem,
  FetchAllItems,
  DeleteItem,
};
