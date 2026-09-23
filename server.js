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

// Tell the application to listen on port 3000.
app.listen(3000, function () {

    // print "Server is running on port 3000"
    console.log("Server is running on port 3000");

});