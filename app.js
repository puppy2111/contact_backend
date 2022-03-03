const express = require('express');
const cors = require("cors");
const app = express();
const setupContactRoutes = require("./app/routes/contact.routes");
const { BadRequestError, errorHandler } = require("./app/errors");
const app = express();
setupContactRoutes(app);

app.use((req, res, next) => {
    next(new BadRequestError(404, "Resource not found"));
});

app.use((err, req, res, next) => {
    errorHandler.handleError(error, res);
})

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Welcome to contact book application." })
})

setupContactRoutes(app);

module.exports = app;