const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send(`
        <h1>My First Project </h1>
        <p>Is Successfully Deployment</p>
    `);
});

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "OK",
        application: "nodejs-deployment"
    });
});

app.listen(PORT, "127.0.0.1", () => {
    console.log(`Application running at http://127.0.0.1:${PORT}`);
});