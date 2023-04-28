const app = require("./index");
require("dotenv").config();

const connection = require("./config/db");

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Node server started at ${port}`));