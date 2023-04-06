<<<<<<< HEAD
const express = require("express");
const teamRouter = require("./teamRouter");
const app = express();

const PORT = 4000;

//Middleware
app.use(express.json());
app.use("/teams", teamRouter);

//Server Startup
app.listen(PORT, () => {
    console.log(`App Started on: ${PORT}`);
});
=======
const express = require("express");
const teamRouter = require("./teamRouter");
const app = express();

const PORT = 4000;

//Middleware
app.use(express.json());
app.use("/teams", teamRouter);

//Server Startup
app.listen(PORT, () => {
    console.log(`App Started on: ${PORT}`);
});
>>>>>>> 395381663486633ef9d333886f86ed979f503af8
