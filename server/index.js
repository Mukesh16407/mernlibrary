const express = require("express");
const app = express();
app.use(express.json());
require("dotenv").config();
const connection = require("./config/db");
const port = process.env.PORT || 5000;

const usersRoute = require("./routes/userRouter");
const booksRoute = require("./routes/booksRoute");
const issuesRoute = require("./routes/issuesRouter");
const reportsRoute = require("./routes/reportsRoute");

app.use("/api/users", usersRoute);
app.use("/api/books", booksRoute);
app.use("/api/issues", issuesRoute);
app.use("/api/reports", reportsRoute);

app.listen(port, () => console.log(`Node server started at ${port}`));
