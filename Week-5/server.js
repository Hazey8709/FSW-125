const express = require("express");
const bell = express();

const bountyRouter = require("./routes/bountyRouter");

//! Listener PORT 3000
bell.listen(3000, () => {
    console.log(
        "listening on PORT 3000" + " " + "Begin your Project GOOD LUCK! "
    );
});

bell.use(express.json());

//! Routes
bell.use("/recycledItems ", bountyRouter);
