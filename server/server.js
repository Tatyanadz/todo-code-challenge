require("dotenv").config();
const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const app = express();

const todo = require("./routes/todo");

// connecting database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// initializing  middleware
app.use(express.json({ extended: false }));
app.get("/", (req, res) => res.send("Server up and running"));

// routes
app.use("/api/todo", todo);

// setting up port
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});