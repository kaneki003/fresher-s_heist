const express = require("express");
const router = express.Router();
const Item = require("../models/Item");
var jwt = require("jsonwebtoken"); //auth token creator and extract details from it
const JWT_SECRET = "Flutio@5665";
const { UplodItem , UpdateItem,SearchItem,FetchAllItems,DeleteItem } = require("../Controllers/ItemController");
const { protect } = require("../MiddleWare/Authmiddleware");

//ROUTE 3: end point for upload a new item for sale

router.route("/createitem").post(protect, UplodItem);



//ROUTE 4 : end point for updating item is sold or not

router.route("/updateitem").put(protect,UpdateItem);

//ROUTE 5 : end point for searching items

router.route("/searchitem").get(protect,SearchItem)

//ROUTE 6 : end point for showing all items
router.route("/fetchall").get(protect,FetchAllItems)

//ROUTE 7 : end point for deleting item
router.route("/delete").delete(DeleteItem)

module.exports=router