const express = require("express");
const bell = express();

const bountyRouter = require("./routes/bountyRouter");
const PORT = 3000;

bell.use(express.json());

//! Routes
bell.use("/", bountyRouter);

//! Error Handling
bell.use((err, req, res, next) => {
    console.log(err);
    return res.send({
        errMsg: "Located an Error!! Check crud operations",
    });
});

//! Listener PORT 3000  localhost:3000/
bell.listen(PORT, () => {
    console.log(
        `Listening on port(${PORT})` + " " + "Begin your Project, GOOD LUCK! "
    );
});
