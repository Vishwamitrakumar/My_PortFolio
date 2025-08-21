const express = require("express");
const mongoose = require("mongoose");
const userrouter = require("./routes/userroute.js");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;


const corsOptions = {
  origin: "http://localhost:5173",
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
