# What is Express.js ?
Express is a JS framework.Express.js simplifies the process of handling things like showing web pages, managing information from users, and `organizing the overall structure of a website. `

# Use of Express
There are 4 major use of Express

1> Listen for incoming request (it can be `get`, `post` etc);

2> parse a request

3> Match response with routes

4> send response

*Will discuss each of these part later on in this md file.*

# How to use express? 

`Step 1`: Install Node.js

Before using Express, we need to have Node.js installed on our computer. 

`Step 2:` Create a Project Folder


`Step 3:` Initialize Your Project

Open your command line or terminal, navigate to your project folder, and run the following command to create a `package.json` file:

```
npm init -y
```
`Step 4`: Install Express

Install Express in your project by running:
```
npm install express
```
* *Make sure you're on correct directory*

`Step 5`: Now we can Create our First Express App

Inside your project folder, create a file (let's say app.js) and open it in a code editor.

`Step 6`: Write Your Express App

In app.js, write a simple Express app.

Example:
```
const express = require("express");        
const app = express();

let port = 3000;

app.get("/", (req, res)=>{
    res.send("Hello, This is your first express app");
});

app.listen(port,()=>{
    console.log("app is listening.");
});
```
`step 7` : Now we've to Run our server. By writing this below command
```
node app.js
```
`step 8` : Now we have to open our web browser & go to http://localhost:3000/ (as we've use our port 3000) you should see your message; in this case it will be *"Hello, This is your first express app*.

* NOTE : *press `ctrl+c` to close your server*.