const express = require("express");
const Port_User = require("../models/user_schema.js");
const router = express.Router();

router.get("/" , async  (req , res) => {
     const data =await Port_User.find({});
     res.send(data);
})
router.post("/" , async (req, res) => {
   const   {name , email , phone , message} = req.body;
   const data = await  Port_User({name, email , phone , message});
   if (!data) {
     return res.status(400).json({ error: "Failed to save data" });
   }

   res.status(201).json({ success: true, user: data });
   data.save();
})

module.exports = router;