const express = require("express");
const app = express();
const port = 8000;
const path = require('path');

const posts = [
    {
        img : "https://shorturl.at/gxEG9",
        caption : "Amazing time with nature",
        like : 100
    },
    {
        img : "https://shorturl.at/GQ146",
        caption : "beautiful time with nature",
        like : 200
    },
    {
        img : "https://shorturl.at/iuyG1",
        caption : "great time with nature",
        like : 600
    },
    {
        img : "https://shorturl.at/gxEG9",
        caption : "peaceful time with nature",
        like : 850
    },
    
]
const userName = "Atrika";
const noOfPost = posts.length;

// to server static file
app.use(express.static(path.join(__dirname, "public")));

// 1st Route -> Main Page
app.get("/", (req, res) =>{
    // here we will see main content like user name, no of post, etc
    res.render("main.ejs", {userName, noOfPost});
});

// 2nd Route -> see all posts
app.get("/posts", (req, res)=>{
    res.render("allPost.ejs", {posts});
});

app.listen(port, (req, res) =>{
    console.log(`App is listening on port ${port}`);
})
