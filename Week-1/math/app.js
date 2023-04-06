//! JavaScript Page (app.js)

//localhost:3000/

// http: var express = require("express");
// var app = express();
// const port = 3000;
var math = require("./math");

console.log(`math addition =  ${math.addition(3, 4)}`);

console.log(`math multiplication = ${math.multiplication(3, 4)}`);

console.log(`math division = ${math.division(3, 4)}`);

console.log(`math subtraction = ${math.subtraction(3, 4)}`);
