const express = require("express");
const app = express();
const path = require("path");


app.use(express.static("public")); // To serve static files, we use this

// ejs working
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res)=> {
    res.send("home page");
});


// Now we assume that, we are getting data from database (For now we are getting data from data.json file)
app.get("/ig/:username", (req, res) =>{
    let {username} = req.params;        // destructuring username

    const data = require("./data.json");    // assuming this is our data coming from database 

    // console.log(data.username);
    //  By changing data.username to data[username], you are telling JavaScript to use the value of the username variable as the property name when accessing the data object
    
    res.render("page.ejs", {data : data[username]});    // rendering page.ejs by passing username
})


app.listen(8000, (req, res)=>{
    console.log("app is listening");
})