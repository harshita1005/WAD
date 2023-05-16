const express = require('express');//In this we put all functions of express in express variable
const app = express();//all functions of express in app variable 
const path = require('path');// path is included
app.use(express.json())//Use the json function of express in our app
app.use('/',(req,res)=>{ // works as HTTP in request-response format
    res.sendFile(path.join(__dirname, './index.html')) //To display contents of html file on localhost
})

app.listen(5000,()=>{ //Server listens on port 5000
    console.log("Server is running") // To check server is running or  not.
})