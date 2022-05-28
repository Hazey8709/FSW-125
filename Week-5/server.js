const express = require("express");
const bell = express();

const bountyRouter = require("./routes/bountyRouter");

bell.listen(3000, () => {
    console.log(
        "listening on PORT 3000" + " " + "Begin your Project GOOD LUCK! "
    );
});

bell.use(express.json());

bell.use("/recycledItems ", bountyRouter);
