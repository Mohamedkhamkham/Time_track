require("dotenv").config();
require("./db");

const express = require("express");
const app = express();


require("./config")(app);

// Mount API routes under the /api prefix
const apiRouter = require("./routes/rutas");
app.use("/api", apiRouter);


require("./error-handling")(app);

module.exports = app;
