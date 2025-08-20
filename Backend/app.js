const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/userRoute.js");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
dotenv.config();


// Middlewares
app.use(cors()); 
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

app.use("/user", userRouter);

const MONGO_URI = process.env.MONGO_URI;
async function main() {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Connected to DB");
  } catch (err) {
    console.error("❌ DB connection error:", err);
  }
}
main();

// Start server
app.listen(3000, () => {
  console.log("🚀 Server is running on port 3000");
});
