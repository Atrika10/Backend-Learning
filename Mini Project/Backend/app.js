const express = require("express");
const app = express();
const port = 8000;

// this line is essential when dealing with HTML forms, as it enables our Express application to properly handle and parse data submitted through forms.
app.use(express.urlencoded({extended : true}));
app.use(express.json());        // if json data is coming, then express will parse those data using this middleware

// In get method we can see all input in url itself, So this is not safe 
app.get("/register", (req, res)=>{
    console.log(req.query);             
    res.send("Response Accepted using GET req");
})

// In POST method, we can't see inputs in url; it is sent in body of request 
app.post("/register", (req, res)=>{
    // console.log(req.body);  // this will give us undefined as we've not use any middleware to parse this data (whatever is coming from form)

    let {username, password} = req.body;
    console.log(req.body);      // now this is understandable as we've used middleware to parse incoming data
    res.send(`Response Accepted using POST request. hi ${username}`);
})
app.listen(port, ()=>{
    console.log(`app is listening on port ${port}`);
})