// importing the modules
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const path = require("path");
const fs = require("fs");
require("dotenv").config();

// app config
const app = express();

//middlewares
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:3000",
    methods: ["GET", "POST", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

// routes
app.use("/api/train", require("./routes/train"));
app.use("/api/user", require("./routes/user"));
app.use("/api/book", require("./routes/book"));
app.use("/api/auth", require("./routes/auth"));

// Serve React build
app.use(express.static(path.join(__dirname, "../client/build")));
console.log("Static path:", path.join(__dirname, "../client/build"));
console.log("Build exists:", fs.existsSync(path.join(__dirname, "../client/build")));
console.log("Build contents:", fs.readdirSync(path.join(__dirname, "../client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

// mongodb
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
  .then(() => console.log("Database Connection Established"))
  .catch((err) => console.log("MongoDB connection error:", err));

//port
const PORT = process.env.PORT || 5000;

//listen
app.listen(PORT, () => console.log(`server started at ${PORT}`));