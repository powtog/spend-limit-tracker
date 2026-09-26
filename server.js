

// Load environment variables from .env into process.env.
require("dotenv").config();


// Load Express to create and manage our backend server.
const express = require("express");


// Load Node's built-in path module to construct file and directory paths.
const path = require("path");


// Import the tools needed to configure and communicate with Plaid.
const { Configuration, PlaidApi, PlaidEnvironments } = require("plaid");


// Create an Express application.
const app = express();


// Verify that our Sandbox credentials are configured.
if (
    process.env.PLAID_ENV !== "sandbox" ||
    !process.env.PLAID_CLIENT_ID ||
    !process.env.PLAID_SECRET
) {
    throw new Error("Plaid Sandbox configuration is missing or invalid.");
}

// Configure the Plaid API client to use the Sandbox environment.
const plaidConfig = new Configuration({
    basePath: PlaidEnvironments.sandbox,
    baseOptions: {
        headers: {
            "PLAID-CLIENT-ID": process.env.PLAID_CLIENT_ID,
            "PLAID-SECRET": process.env.PLAID_SECRET
        }
    }
});

// Create our Plaid API client using the configuration.
const plaidClient = new PlaidApi(plaidConfig);


// Serve frontend files only from the public directory.
app.use(express.static(path.join(__dirname, "public")));


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