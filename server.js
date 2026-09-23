// Load Express.
const express = require("express");

// Create an Express application.
const app = express();

// Serve frontend files from this project.
app.use(express.static(__dirname));

// Respond to GET requests at /api/test.
app.get("/api/test", function (req, res) {

    // Send JSON back to the browser.
    res.json({
        message: "Backend is working!"
    });
});


// Respond to GET requests at /api/transctions.
app.get("/api/transactions", function (req, res) {

    // Create fake transaction data to simulate transactions we will later receive from Plaid.
    const transactions = [
         {
            amount: 22.99,
            date: "2026-08-28"
        },
        {
            amount: 17.50,
            date: "2026-08-27"
        },
        {
            amount: 13.67,
            date: "2026-08-26"
        },
        {
            amount: 12.50,
            date: "2026-08-25"
        },
        {
            amount: 42.19,
            date: "2026-08-24"
        },
        {
            amount: 7.25,
            date: "2026-08-23"
        }
    ];

    // Send the transaction array back to the frontend as JSON.
    res.json(transactions);

});


// Tell the application to listen on port 3000.
app.listen(3000, function () {

    // print "Server is running on port 3000"
    console.log("Server is running on port 3000");

});