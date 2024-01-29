const express = require("express");
const app = express();
const port = 8000;
const path = require('path');
const { v4: uuidv4 } = require('uuid');
var methodOverride = require('method-override')

let posts = [
    {
        id : uuidv4(),
        img : "https://shorturl.at/gxEG9",
        caption : "Amazing time with nature",
        like : 100
    },
    {
        id : uuidv4(),
        img : "https://shorturl.at/GQ146",
        caption : "beautiful time with nature",
        like : 200
    },
    {
        id : uuidv4(),
        img : "https://shorturl.at/iuyG1",
        caption : "great time with nature",
        like : 600
    },
    {
        id : uuidv4(),
        img : "https://shorturl.at/gxEG9",
        caption : "peaceful time with nature",
        like : 850
    },
    
]
const userName = "Atrika";
const noOfPost = posts.length;

// to parse data
app.use(express.urlencoded({extended : true}));

// set view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// to server static file
app.use(express.static(path.join(__dirname, "public")));

// to override http request
app.use(methodOverride('_method'));

// 1st Route -> Main Page
app.get("/", (req, res) =>{
    // here we will see main content like user name, no of post, etc
    res.render("main.ejs", {userName, noOfPost});
});

// 2nd Route -> see all posts
app.get("/posts", (req, res)=>{
    res.render("allPost.ejs", {posts});
});

// 3rd Route -> to make a form for new post
app.get("/posts/new", (req, res) =>{
    res.render("newPost.ejs");
})

// 4th Route -> Update feature (user can update caption)

// 5th Route -> Delete Post
app.delete("/posts/:id", (req, res)=>{
    let {id} = req.params;
    posts = posts.filter((p) => id !== p.id);
    res.redirect("/posts");
})

// handle post request to create new post & it will redirect to all post after updating new post
app.post("/posts", (req, res) =>{
    let {imageUrl,postCaption } = req.body;
    img = imageUrl;             // as I've changed the name of the inputs; I've to set it to original name 
    caption = postCaption;
    let like =0;

    posts.push({img,caption , like});
    res.redirect("/posts");
})

app.listen(port, (req, res) =>{
    console.log(`App is listening on port ${port}`);
})
