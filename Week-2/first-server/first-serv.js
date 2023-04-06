const express = require("express");
const app = express();

const PORT = 3000;

let users = [
    { id: 1, name: "jordan", location: "ma" },
    { id: 2, name: "Hazey87", location: "il" },
    { id: 3, name: "Noobie J", location: "ny" },
    { id: 4, name: "Noob", location: "mi" },
    { id: 5, name: "Red Dog", location: "ma" },
];

let woods = [
    { id: 1, name: "Pine", kind: "Soft wood" },
    { id: 2, name: "Cedar", kind: "Hard wood" },
    { id: 3, name: "Oak", kind: "Hard wood" },
    { id: 4, name: "Mahogany", kind: "Hard wood" },
    { id: 5, name: "Teak", kind: "Hard wood" },
];

let oldCars = [
    { id: 1, brand: "Chevy", type: "Chevelle", model: "SS" },
    { id: 2, brand: "Ford", type: "Mustang", model: "GT" },
    { id: 3, brand: "Chevy", type: "Nova", model: "SS" },
    { id: 4, brand: "Chevy", type: "Bel Air", model: "A" },
];

app.get("/users", (req, res) => {
    res.send(users);
});

app.get("/woods", (req, res) => {
    res.send(woods);
});

app.get("/oldCars", (req, res) => {
    res.send(oldCars);
});

app.listen(PORT, () => {
    console.log(`APP started on port: ${PORT}`);
});

// //! This is for week 3
// const express = require( "express" );
// const reader = require("body-parser");
// const bob = express();

// bob.use(express.json());

// // Create an array of books
// // You will need a unique id for each book, that will be covered in the videos
// books = [
//     { name: "The Great Gatsby", author: "F. Scott Fitzgerald" },
//     { name: "The Catcher in the Rye", author: "J. D. Salinger" },
// ];

// // This is MIDDLEWARE (notice the next and next())
// // This runs for EVERY endpoint and HTTP verb
// bob.use((req, res, next) => {
//     // DO SOMETHING - in this case console.log the day/time in UTC
//     console.log("Time:", Date.now());

//     // Continue looking for the correct API endpoint
//     next();
// });

// // After MIDDLEWARE, we don't want to continue, so no next / next()
// // By the way, the endpoints ROUTES should be in a separate file and imported here

// // GET = http://localhost:3000/
// bob.get("/", (req, res) => {
//     res.send("Hello World");
// });

// // GET = http://localhost:3000/books
// // Gets ALL books
// bob.get("/books", (req, res) => {
//     res.send(books);
// });

// // GET = http://localhost:3000/books
// // Gets ONE book based on the title
// bob.get("/books/:id", (req, res) => {
//     // You will need to parse through the array to update the correct book based on the id
//     // ADD CODE HERE
//     res.send(books);
// });

// // POST = http://localhost:3000/addbook
// // Adds a book sent as JSON to the array
// bob.post("/addbook", (req, res) => {
//     books.push(req.body);
//     res.send(books);
// });

// // PUT = http://localhost:3000/updatebook
// // Updates a book sent as JSON to the array based on the id in the JSON
// bob.put("/updatebook", (req, res) => {
//     // You will need to iterate through the array to update the correct book based on the id
//     // ADD CODE HERE
//     res.send("updating book # " + req.body.bookid);
// });

// // DELETE = http://localhost:3000/deletebook
// // Deletes a book based on the id in the JSON
// bob.put("/deletebook", (req, res) => {
//     // You will need to iterate through the array to delete the correct book based on the id
//     // ADD CODE HERE
//     res.send("deleting book # " + req.body.bookid);
// });

// // This is the listener for Express
// bob.listen(3000, () => {
//     console.log("Listening on port 3000");
// });
