const express = require("express");
const Do = express();

//! uuidv4 ID generator
const { v4: uuidv4 } = require("uuid");
//*console.log(uuidv4());

//!   Listener on PORT 3000
Do.listen(3000, () => {
    console.log(
        "listening on PORT 3000" + " " + "Begin Your Project, GOOD LUCK!!"
    );
});

//!  Middle Ware functions Example
//* Called in order coded
const middleWare = function (req, res, next) {
    //console.log("middle ware function works");
    next();
};

Do.use(express.json());
Do.use(middleWare);

//!  ARRAY Of recycledItems
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

//! GET  http://localhost:3000/
//* Get/ Read info for ( ALL CONTENT )
Do.get("/", (req, res) => {
    // res.send("Hello World! -- Get --");
    res.send(recycledItems);
});

//! GET  http://localhost:3000/:id
//* Get / Read info for ( certain ID# )
Do.get("/:itemId", (req, res) => {
    const itemId = req.params.itemId;
    const certItem = recycledItems.find((item) => item.id === itemId);
    res.send(certItem);
    console.log("It Works");
    //res.send("Hello World! -- Get --" + req.params.id);
});

//!  POST
//*  Add To / Create Content
Do.post("/", (req, res) => {
    recycledItems.push(req.body);
    res.send(recycledItems);
});

//!  PUT /:id
//*   Update content for certain ID#
Do.put("/:itemId", (req, res) => {
    const itemId = req.params.itemId;
    const itemIndex = recycledItems.findIndex((item) => item.id === itemId);
    Object.assign(recycledItems[itemIndex], req.body);

    //res.send("Put -- works" + req.params.id);
    res.send(recycledItems);
});

//!  DELETE /:id
//*  Delete/ Destroy content ( By ID# )
Do.delete("/:itemId", (req, res) => {
    const itemId = req.params.itemId;
    const itemIndex = recycledItems.findIndex((item) => item.id === itemId);
    recycledItems.splice(itemIndex, 1);
    res.send(recycledItems);
    //res.send("Delete -- works" + req.params.id);
});
