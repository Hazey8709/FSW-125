<<<<<<< HEAD
const express = require("express");
const bell = express();

const bountyRouter = require("./routes/bountyRouter");

const PORT = 4000;

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

//! Listener PORT 4000  localhost:4000/
bell.listen(PORT, () => {
    console.log(
        `Listening on port(${PORT})` + " " + "Begin your Project, GOOD LUCK! "
    );
});
=======
const express = require("express");
const bell = express();

const bountyRouter = require("./routes/bountyRouter");

const PORT = 4000;

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

//! Listener PORT 4000  localhost:4000/
bell.listen(PORT, () => {
    console.log(
        `Listening on port(${PORT})` + " " + "Begin your Project, GOOD LUCK! "
    );
});
>>>>>>> 395381663486633ef9d333886f86ed979f503af8
