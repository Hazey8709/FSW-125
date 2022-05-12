const express = require("express");
const Do = express();

//! RecycledItems From recycleBin.js
const recycleBin = require("./recycleBin");

//! Array of Todos
//? Todos Array
const Todos = [
    {
        id: 10,
        name: "Practice Code",
        description: "Practice code in vs.code ",
        isComplete: false,
    },
    {
        id: 11,
        name: "Practice HTML Code",
        description: "Practice HTML code in vs.code ",
        isComplete: false,
    },
    {
        id: 12,
        name: "Practice JavaScript Code",
        description: "Practice JavaScript code in vs.code ",
        isComplete: false,
    },
    {
        id: 13,
        name: "Practice Express",
        description: "Practice express in vs.code ",
        isComplete: false,
    },
];

//!  Middle Ware functions Example
//* Called in order coded
const middleWare = function (req, res, next) {
    console.log("middle ware function works");
    next();
};

Do.use(express.json());
Do.use(middleWare);

//! GET  http://localhost:3000/
//* Get/ Read info for ( ALL CONTENT )
Do.get("/", (req, res) => {
    // res.send("Hello World! -- Get --");
    res.send(recycleBin.RecycledItems);
});

//! GET  http://localhost:3000/:id
//* Get/ Read info for ( certain ID# )
Do.get("/:id", (req, res) => {
    res.send("Hello World! -- Get --" + req.params.id);
});

//!  POST
//*  Add/Create content
Do.post("/", (req, res) => {
    recycleBin.RecycledItems.push(req.body);
    res.send(recycleBin.RecycledItems);
});

//!  PUT /:id
//*   Update content for certain ID#
Do.put("/:id", (req, res) => {
    res.send("Put -- works" + req.params.id);
});

//!  DELETE /:id
//*  Delete/ Destroy content ( By ID# )
Do.delete("/:id", (req, res) => {
    res.send("Delete -- works" + req.params.id);
});

//!   Listener on PORT 3000
Do.listen(3000, () => {
    console.log("listening on PORT 3000");
});
