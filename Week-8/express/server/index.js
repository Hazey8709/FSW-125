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
