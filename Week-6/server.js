const express = require("express");
const bell = express();

const thingsRouter = require("./routes/thingsRouter");

//!   Listener on PORT 3000
bell.listen(3000, () => {
    console.log(
        "listening on PORT 3000" + " " + "Begin Your Project, GOOD LUCK!!"
    );
});

//!  Middle Ware
bell.use(express.json());

//! routes
bell.use("/things", thingsRouter);

// //! GET  http://localhost:3000/
// //* Get/ Read info for ( ALL CONTENT )
// bell.get("/things", (req, res) => {
//     // res.send("Hello World! -- Get --");
//     res.send(things);
//     console.log("GET All Request, Works!");
// });

// //! GET  http://localhost:3000/:id
// //* Get / Read info for ( certain ID# )
// bell.get("/:itemId", (req, res) => {
//     const itemId = req.params.itemId;
//     const certItem = things.find((item) => item.id === itemId);
//     res.send(certItem);
//     console.log("GET One By ID Request, Works!");
//     //res.send("Hello World! -- Get --" + req.params.id);
// });

// //!  POST
// //*  Add To / Create Content
// bell.post("/", (req, res) => {
//     things.push(req.body);
//     res.send(things);
//     console.log("POST Request, Works!");
// });

// //!  PUT /:id
// //*   Update content for certain ID#
// bell.put("/:itemId", (req, res) => {
//     const itemId = req.params.itemId;
//     const itemIndex = things.findIndex((item) => item.id === itemId);
//     Object.assign(things[itemIndex], req.body);
//     res.send(things);
//     console.log("PUT / Update By ID Request, Works!");
//     //res.send("Put -- works" + req.params.id);
// });

// //!  DELETE /:id
// //*  Delete/ Destroy content ( By ID# )
// bell.delete("/:itemId", (req, res) => {
//     const itemId = req.params.itemId;
//     const itemIndex = things.findIndex((item) => item.id === itemId);
//     things.splice(itemIndex, 1);
//     res.send(things);
//     console.log("DELETE One By ID Request, Works!");
//     //res.send("Delete -- works" + req.params.id);
// });
