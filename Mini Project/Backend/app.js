const express = require("express");
const app = express();
const port = 8000;

app.get("/register", (req, res)=>{
    console.log(req.query);
    res.send("Response Accepted using GET req");
})

app.listen(port, ()=>{
    console.log(`app is listening on port ${port}`);
})