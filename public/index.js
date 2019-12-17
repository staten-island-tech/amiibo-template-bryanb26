const path = require("path");
const express = require("express");
const app = express();

//define paths for express
const publicDiretoryPath = path.join(__dirname,"../pubic");
const viewsPath = path.join(__dirname, "../templates/views");
//setup handlebars engine and views location
app.set("views engine", "hbs");//Telling express/NODE to use handlebars for templates
app.set("views", viewsPath);//Telling express to get templates from templates/views folder 
app.get("", async (req,res)=>{
    try{
        res.render("index");
    }catch(error){
        res.status(500).send("Page not found");
    }
});

app.get("/thamisucks", (req,res)=>{
    res.send("Thami wasnt talking about meth. And Yes I have to do this while you eat.")
});

app.listen(3000, (req, res)=>{
    console.log('Listening on port 3000');
    console.log(__dirname);
});
