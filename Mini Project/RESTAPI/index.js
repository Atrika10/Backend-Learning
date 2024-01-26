const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

// to understand incoming data
app.use(express.urlencoded({extended : true}));

// to render ejs files
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// to serve static files
app.use(express.static(path.join(__dirname, "public")));

// Dummy data
let posts = [
    {
        name: "John ",
        content: "Exploring the world of coding. #javascript #webdev"
    },
    {
        name: "Alice Smith",
        content: "Cooking up some delicious recipes. #foodie"
    },
    {
        name: "Bob Johnson",
        content: "Just finished reading a great book. #booklover"
    },
    {
        name: "Eva Williams",
        content: "Traveling and documenting the journey. #travel"
    },
    {
        name: "Mike Brown",
        content: "Learning a new language. #languagelearning"
    }
];


// 1st Route -> Index route where all post will be visible
app.get("/posts", (req, res)=>{
    res.render("index.ejs", {posts});
})

app.listen(port, ()=>{
    console.log(`App is listening on port ${port}`);
})