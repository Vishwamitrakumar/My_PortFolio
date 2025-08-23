if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userrouter = require("./routes/userrouter.js");


const app = express();
const PORT = process.env.PORT || 8080;


const corsOptions = {
  origin: ["http://localhost:5173", "https://my-portfolio-vsingh.vercel.app" , "https://my-portfolio-vsingh-data.vercel.app"] ,
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/user", userrouter);

const MONGO_URI = process.env.MONGO_URI;
async function main() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ Connected to DB");
  } catch (err) {
    console.error("❌ DB connection error:", err);
  }
}
main();


app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
