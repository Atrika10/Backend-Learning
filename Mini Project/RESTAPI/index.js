const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const {v4 : uuidv4} = require('uuid');  // to generate unique id
var methodOverride = require('method-override');

// to understand incoming data
app.use(express.urlencoded({extended : true}));

// to render ejs files
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// to serve static files
app.use(express.static(path.join(__dirname, "public")));

// to override http request
app.use(methodOverride('_method'));

// Dummy data
let posts = [
    {
        id : uuidv4(),
        name: "John ",
        content: "Exploring the world of coding. #javascript #webdev"
    },
    {
        id : uuidv4(),
        name: "Alice Smith",
        content: "Cooking up some delicious recipes. #foodie"
    },
    {
        id : uuidv4(),
        name: "Bob Johnson",
        content: "Just finished reading a great book. #booklover"
    },
    {
        id : uuidv4(),
        name: "Eva Williams",
        content: "Traveling and documenting the journey. #travel"
    },
    {
        id : uuidv4(),
        name: "Mike Brown",
        content: "Learning a new language. #languagelearning"
    }
];


// 1st Route -> Index route where all post will be visible
app.get("/posts", (req, res)=>{
    res.render("index.ejs", {posts});
})

// 2nd Route -> Add new post
// This will be a 2 step process

app.get("/posts/new", (req, res) =>{    // 1. Adding new post in this route 
    res.render("newpost.ejs");
})

app.post("/posts", (req, res) =>{      // 2. Handeling data in post request
    // incoming data will be added in 'posts' array
    let { name, content} = req.body;
    let id = uuidv4();                  // create new id, while creating new post
    posts.push({id, name, content});
    // res.send("post req working");  <- This line will not redirect to our main page
    res.redirect("/posts");
})

// 3rd Route -> Access Each Post in Detail
app.get("/posts/:id", (req, res)=>{
    let {id}= req.params;       // store id
    let post = posts.find((p)=> id === p.id);
    res.render("eachPost.ejs", {post});
})

//4th Route -> Edit
app.get("/posts/:id/edit",(req, res)=>{
    let {id} = req.params;
    let post = posts.find((p)=> id===p.id);
    res.render("edit.ejs",{post});
}) 

// we will update content which is coming from edit.ejs page
app.patch("/posts/:id", (req, res)=>{
    let {id} = req.params;
    let newContent = req.body.content;
    let post = posts.find((p)=> id === p.id);
    post.content = newContent;
    res.redirect("/posts");
})

// 5th Route -> Delete Post
app.delete("/posts/:id", (req, res)=>{
    let {id} = req.params;
    posts = posts.filter((p)=> id !== p.id);
    console.log(post);
    res.redirect("/posts");
})

app.listen(port, ()=>{
    console.log(`App is listening on port ${port}`);
})