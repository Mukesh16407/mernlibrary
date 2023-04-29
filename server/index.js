const express = require('express');
const app = express();
app.use(express.json());
require("dotenv").config();
const connection = require("./config/db");
const port = process.env.PORT || 5000;

const usersRoute = require("./routes/userRouter");




app.use("/api/users", usersRoute);

app.listen(port, () => console.log(`Node server started at ${port}`));