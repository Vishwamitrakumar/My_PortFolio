const express = require("express");
const Port_User = require("../models/user_schema.js");
const router = express.Router();

router.get("/" , async  (req , res) => {
     const data =await Port_User.find({});
     res.send(data);
})
router.post("/", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    const data = new Port_User({ name, email, phone, message });
    await data.save();  

    res.status(201).json({ success: true, user: data }); 
  } catch (err) {
    console.error("Error saving user:", err);
    res.status(500).json({ error: "Failed to save data" });
  }
});

module.exports = router;