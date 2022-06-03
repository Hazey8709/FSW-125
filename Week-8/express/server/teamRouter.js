const express = require("express");
const teamRouter = express.Router();
const { v4: uuidv4 } = require("uuid");

let teams = [
    { city: "New York", name: "Yankees", _id: uuidv4() },
    { city: "New York", name: "Mets", _id: uuidv4() },
    { city: "Chicago", name: "Bears", _id: uuidv4() },
    { city: "Arizona", name: "Cardinals", _id: uuidv4() },
];

teamRouter

    .get("/", (req, res) => {
        console.log("GETTING...");
        res.send(teams);
    })
    .post("/", (req, res) => {
        const newTeam = req.body;
        newTeam._id = uuidv4();
        teams.push(newTeam);
        console.log("CREATING...");
        res.send(newTeam);
    })
    .put("/:teamId", (req, res) => {
        const teamId = req.params.teamId;
        console.log("teamId: ", teamId);
        const teamIndex = teams.findIndex((team) => team._id === teamId);
        console.log("teamIndex: ", teamIndex);
        Object.assign(teams[teamIndex], req.body);
        console.log("UPDATING...");
        res.send(teams[teamIndex]);
    })
    .delete("/:teamId", (req, res) => {
        const teamId = req.params.teamId;
        const itemIndex = teams.findIndex((item) => item._id === teamId);
        teams.splice(itemIndex, 1);
        console.log("DELETING...");
        res.send("Resource successfully deleted");
    });

module.exports = teamRouter;
