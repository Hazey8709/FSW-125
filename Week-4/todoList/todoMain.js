const express = require("express");
const bel = express();

//! uuidv4 ID generator
const { v4: uuidv4 } = require("uuid");
//*console.log(uuidv4());

//!   Listener on PORT 3000
bel.listen(3000, () => {
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

bel.use(express.json());
bel.use(middleWare);

//!  ARRAY Of todoList
const todoList = [
    {
        id: uuidv4(),
        Name: "HTML",
        Description: "Practice HTML Code",
        Recyclable: true,
        Quantity: "685",
        Price_Per_Unit: 85,
        imageUrl:
            "https://images.pexels.com/photos/270366/pexels-photo-270366.jpeg?cs=srgb&dl=codes-coding-programming-270366.jpg&fm=jpg",
    },
    {
        id: uuidv4(),
        Name: "CSS",
        Description: "Practice CSS code",
        Recyclable: true,
        Quantity: "435",
        Price_Per_Unit: 55,
        imageUrl:
            "https://www.codegrepper.com/codeimages/one-page-image-html-css.png",
    },
    {
        id: uuidv4(),
        Name: "JavaScript",
        Description: "Practice JS code",
        Recyclable: true,
        Quantity: "65",
        Price_Per_Unit: 15,
        imageUrl: "https://buildingaprofitablewebsite.com/pictures/238237.png",
    },
    {
        id: uuidv4(),
        Name: "Express",
        Description: "Practice Express code",
        Recyclable: true,
        Quantity: "1115",
        Price_Per_Unit: 5,
        imageUrl:
            "https://www.codegrepper.com/codeimages/how-to-use-callback-in-express-js-for-routes.png",
    },
];

//! GET  http://localhost:3000/
//* Get/ Read info for ( ALL CONTENT )
bel.get("/", (req, res) => {
    // res.send("Hello World! -- Get --");
    res.send(todoList);
    console.log("GET All Request, Works!");
});

//! GET  http://localhost:3000/:id
//* Get / Read info for ( certain ID# )
bel.get("/:itemId", (req, res) => {
    const itemId = req.params.itemId;
    const certItem = todoList.find((item) => item.id === itemId);
    res.send(certItem);
    console.log("GET One By ID Request, Works!");
    //res.send("Hello World! -- Get --" + req.params.id);
});

//!  POST
//*  Add To / Create Content
bel.post("/", (req, res) => {
    todoList.push(req.body);
    res.send(todoList);
    console.log("POST Request, Works!");
});

//!  PUT /:id
//*   Update content for certain ID#
bel.put("/:itemId", (req, res) => {
    const itemId = req.params.itemId;
    const itemIndex = todoList.findIndex((item) => item.id === itemId);
    Object.assign(todoList[itemIndex], req.body);
    res.send(todoList);
    console.log("PUT / Update By ID Request, Works!");
    //res.send("Put -- works" + req.params.id);
});

//!  DELETE /:id
//*  Delete/ Destroy content ( By ID# )
bel.delete("/:itemId", (req, res) => {
    const itemId = req.params.itemId;
    const itemIndex = todoList.findIndex((item) => item.id === itemId);
    todoList.splice(itemIndex, 1);
    res.send(todoList);
    console.log("DELETE One By ID Request, Works!");
    //res.send("Delete -- works" + req.params.id);
});
