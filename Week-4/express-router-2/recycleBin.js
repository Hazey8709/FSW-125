const { v4: uuidv4 } = require("uuid");

const RecycledItems = [
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
        d: uuidv4(),
        Name: "Card Board",
        Description: "Moving Box",
        Recyclable: true,
        Quantity: "1115",
        Price_Per_Unit: 5,
    },
];

module.exports = {
    RecycledItems,
};
