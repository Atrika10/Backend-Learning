const express = require("express");
const app = express();
const path = require("path");
let ejs = require('ejs');

// ejs working
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res)=> {
    res.send("home page");
});


app.get("/ig/:username", (req, res) =>{
    let {username} = req.params;
    res.render("page.ejs", {username});
})


app.listen(8000, (req, res)=>{
    console.log("app is listening")
})