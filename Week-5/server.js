const express = require("express");
const bell = express();

const bountyRouter = require("./routes/bountyRouter");
const PORT = 3000;

//! Listener PORT 3000
bell.listen(PORT, () => {
    console.log(
        "listening on PORT 3000" + " " + "Begin your Project GOOD LUCK! "
    );
});

bell.use(express.json());

//! Routes
bell.use("/", bountyRouter);
