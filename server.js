
const express = require("express");
const app = express();

let counter = 0;

app.use(express.static("public"));

app.get("/count", (req, res) => {
    counter++;
    res.json({ count: counter });
});

app.get("/current", (req, res) => {
    res.json({ count: counter });
});

app.listen(3000, () => {
    console.log("Server kjører");
});
