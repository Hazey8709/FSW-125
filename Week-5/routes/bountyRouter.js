<<<<<<< HEAD
const express = require("express");
const bountyRouter = express.Router();
const { v4: uuidv4 } = require("uuid");

const recycledItems = [
    {
        id: uuidv4(),
        Name: "Bottle",
        Description: "Plastic bottle",
        Recyclable: true,
        Quantity: "685",
        Price_Per_Unit: 85,
    },
    {
        id: uuidv4(),
        Name: "Bottle",
        Description: "Glass bottle",
        Recyclable: true,
        Quantity: "435",
        Price_Per_Unit: 55,
    },
    {
        id: uuidv4(),
        Name: "Can",
        Description: "Soda Can",
        Recyclable: true,
        Quantity: "65",
        Price_Per_Unit: 15,
    },
    {
        id: uuidv4(),
        Name: "Card Board",
        Description: "Moving Box",
        Recyclable: true,
        Quantity: "1115",
        Price_Per_Unit: 5,
    },
];

//! GET  http://localhost:4000/
//* Get/ Read info for ( ALL CONTENT )
bountyRouter.get("/", (req, res) => {
    res.send(recycledItems);
    console.log("GET All Request, Works!");
});

//! GET  http://localhost:4000/recycledItems/:itemId
//* Get / Read info for ( certain ID# )
bountyRouter.get("/recycledItems/:itemId", (req, res) => {
    const itemId = req.params.itemId;
    const certItem = recycledItems.find((item) => item.id === itemId);

    if (!certItem) {
        const error = new Error(" this item wasn't found! ");
        return next(error);
    }

    res.send(certItem);
    console.log("GET One By ID Request, Works!");
});

//!  (POST) localhost:4000/recycledItems/
//*  Add To / Create Content
bountyRouter.post("/recycledItems/", (req, res) => {
    recycledItems.push(req.body);
    res.send(recycledItems);
    console.log("POST Request, Works!");
});

//!  (PUT) localhost:4000/recycledItems/:itemId
//*   Update content for certain ID#
bountyRouter.put("/recycledItems/:itemId", (req, res) => {
    const itemId = req.params.itemId;
    const itemIndex = recycledItems.findIndex((item) => item.id === itemId);
    Object.assign(recycledItems[itemIndex], req.body);
    res.send(recycledItems);
    console.log("PUT / Update By ID Request, Works!");
    //res.send("Put -- works" + req.params.id);
});

//!  (DELETE) localhost:4000/recycledItems/itemId
//*  Delete/ Destroy content ( By ID# )
bountyRouter.delete("/recycledItems/:itemId", (req, res) => {
    const itemId = req.params.itemId;
    const itemIndex = recycledItems.findIndex((item) => item.id === itemId);
    recycledItems.splice(itemIndex, 1);
    res.send(recycledItems);
    console.log("DELETE One By ID Request, Works!");
    //res.send("Delete -- works" + req.params.id);
});

module.exports = bountyRouter;
=======
const express = require("express");
const bountyRouter = express.Router();
const { v4: uuidv4 } = require("uuid");

const recycledItems = [
    {
        id: uuidv4(),
        Name: "Bottle",
        Description: "Plastic bottle",
        Recyclable: true,
        Quantity: "685",
        Price_Per_Unit: 85,
    },
    {
        id: uuidv4(),
        Name: "Bottle",
        Description: "Glass bottle",
        Recyclable: true,
        Quantity: "435",
        Price_Per_Unit: 55,
    },
    {
        id: uuidv4(),
        Name: "Can",
        Description: "Soda Can",
        Recyclable: true,
        Quantity: "65",
        Price_Per_Unit: 15,
    },
    {
        id: uuidv4(),
        Name: "Card Board",
        Description: "Moving Box",
        Recyclable: true,
        Quantity: "1115",
        Price_Per_Unit: 5,
    },
];

//! GET  http://localhost:4000/
//* Get/ Read info for ( ALL CONTENT )
bountyRouter.get("/", (req, res) => {
    res.send(recycledItems);
    console.log("GET All Request, Works!");
});

//! GET  http://localhost:4000/recycledItems/:itemId
//* Get / Read info for ( certain ID# )
bountyRouter.get("/recycledItems/:itemId", (req, res) => {
    const itemId = req.params.itemId;
    const certItem = recycledItems.find((item) => item.id === itemId);

    if (!certItem) {
        const error = new Error(" this item wasn't found! ");
        return next(error);
    }

    res.send(certItem);
    console.log("GET One By ID Request, Works!");
});

//!  (POST) localhost:4000/recycledItems/
//*  Add To / Create Content
bountyRouter.post("/recycledItems/", (req, res) => {
    recycledItems.push(req.body);
    res.send(recycledItems);
    console.log("POST Request, Works!");
});

//!  (PUT) localhost:4000/recycledItems/:itemId
//*   Update content for certain ID#
bountyRouter.put("/recycledItems/:itemId", (req, res) => {
    const itemId = req.params.itemId;
    const itemIndex = recycledItems.findIndex((item) => item.id === itemId);
    Object.assign(recycledItems[itemIndex], req.body);
    res.send(recycledItems);
    console.log("PUT / Update By ID Request, Works!");
    //res.send("Put -- works" + req.params.id);
});

//!  (DELETE) localhost:4000/recycledItems/itemId
//*  Delete/ Destroy content ( By ID# )
bountyRouter.delete("/recycledItems/:itemId", (req, res) => {
    const itemId = req.params.itemId;
    const itemIndex = recycledItems.findIndex((item) => item.id === itemId);
    recycledItems.splice(itemIndex, 1);
    res.send(recycledItems);
    console.log("DELETE One By ID Request, Works!");
    //res.send("Delete -- works" + req.params.id);
});

module.exports = bountyRouter;
>>>>>>> 395381663486633ef9d333886f86ed979f503af8
