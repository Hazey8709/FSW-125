const express = require("express");
const thingsRouter = express.Router();
const { v4: uuidv4 } = require("uuid");
//* random ID generator

const things = [
    {
        name: "Orange",
        price: 25,
        type: "fruit",
        id: uuidv4(),
    },
    {
        name: "Red Cherries",
        price: 150,
        type: "fruit",
        id: uuidv4(),
    },
    {
        name: "Carrot",
        price: 10,
        type: "vegetable",
        id: uuidv4(),
    },
    {
        name: "Apple",
        price: 35,
        type: "fruit",
        id: uuidv4(),
    },
];

//! GET  http://localhost:3000/
//* Get/ Read info for ( ALL CONTENT )
thingsRouter.get("/", (req, res) => {
    res.send(things);
    console.log("GET All Request, Works!");
});

//! GET  http://localhost:3000/:itmeId
//* Get / Read info for ( certain ID# )
thingsRouter.get("/things/:itemId", (req, res) => {
    const itemId = req.params.itemId;
    const certItem = things.find((item) => item.id === itemId);
    res.send(certItem);
    console.log("GET One By ID Request, Works!");
    //res.send("Hello World! -- Get --" + req.params.id);
});

//!  POST
//*  Add To / Create Content
thingsRouter.post("/things/", (req, res) => {
    things.push(req.body);
    res.send(things);
    console.log("POST Request, Works!");
});

//!  PUT /:id
//*   Update content for certain ID#
thingsRouter.put("/things/:itemId", (req, res) => {
    const itemId = req.params.itemId;
    const itemIndex = things.findIndex((item) => item.id === itemId);
    Object.assign(things[itemIndex], req.body);
    res.send(things);
    console.log("PUT / Update By ID Request, Works!");
    //res.send("Put -- works" + req.params.id);
});

//!  DELETE /:id
//*  Delete/ Destroy content ( By ID# )
thingsRouter.delete("/things/:itemId", (req, res) => {
    const itemId = req.params.itemId;
    const itemIndex = things.findIndex((item) => item.id === itemId);
    things.splice(itemIndex, 1);
    res.send(things);
    console.log("DELETE One By ID Request, Works!");
    //res.send("Delete -- works" + req.params.id);
});

module.exports = thingsRouter;
