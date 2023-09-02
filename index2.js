import express from "express";
import bodyParser from "body-parser";

import { dirname } from "path";
import { fileURLToPath } from "url";


const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

var userIsAuth = false;

app.use(bodyParser.urlencoded({ extended: true }));

function checkpass(req, res, next) {
    const password = req.body["password"];
    if (password === "ADMIN") {
        userIsAuth = true;
    } next();

}

app.use(checkpass);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});


