const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const db = require("../config/db");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/", () => {console.log("hellooo");});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
