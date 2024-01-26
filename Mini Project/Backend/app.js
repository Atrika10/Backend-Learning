const express = require("express");
const app = express();
const port = 8000;

// In get method we can see all input in url itself, So this is not safe 
app.get("/register", (req, res)=>{
    console.log(req.query);             
    res.send("Response Accepted using GET req");
})

// In POST method, we can't see inputs in url; it is sent in body of request 
app.post("/register", (req, res)=>{
    console.log(req.body);  // this will give us undefined as we've not use any middleware to parse this data (whatever is coming from form)
    res.send("Response Accepted using POST request");
})
app.listen(port, ()=>{
    console.log(`app is listening on port ${port}`);
})