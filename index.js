const express = require("express");
const dotenv = require("dotenv");
const { connectToDb, disconnectFromDb } = require("./connection");
dotenv.config();

const app = express();
const PORT = process.env.PORT || 7001;

app.get("/", (req, res) => {
    return res.send("<h1>Welcome to nodejs</h1>")
})

connectToDb().then(() => {
    app.listen(PORT, () => {
        console.log("COnnected to db and Server is running on port ", PORT);
    })
}).catch(() => {
    disconnectFromDb();
    process.exit(1);
})