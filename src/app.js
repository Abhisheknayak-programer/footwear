const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 8000;
require("../db/conn");
const hbs = require("hbs");
const Subscribe = require("../models/subscribe");
const UserInformation = require("../models/info");


// Path Of The Folders
const publicPath = path.join(__dirname,"../public");
const viewsPath = path.join(__dirname,"../templates/views");
const Partials_path = path.join(__dirname,"../templates/partials");

app.use(express.static(publicPath));

app.set("view engine","hbs");
app.set("views",viewsPath);
hbs.registerPartials(Partials_path);



// Need For Post Requests To Convert The Form to Json Format
app.use(express.json());
app.use(express.urlencoded({extended:false}));



app.get("/",(req,res)=>{
    res.render("index");
})

app.post("/",async(req,res)=>{
    try {
        
        const DataPosted = new Subscribe({
            name : req.body.name,
            email : req.body.email
        });

        const DataSaver = await DataPosted.save();
        console.log(DataSaver);
        res.status(201).render("index");

    } catch (error) {
        res.status(402).render(error);
    }
})



app.get("/products",(req,res)=>{
    res.render("Allproducts");
})

app.get("/product1",(req,res)=>{
    res.render("sampleProduct")
})

app.get("/info",(req,res)=>{
    res.render("info");
})

app.get("/pay1",(req,res)=>{
    res.render("pay1");
})

app.post("/info",async(req,res)=>{
    try {
        const UserData = new UserInformation({
            name : req.body.name,
            email : req.body.email,
            phone : req.body.phone,
            address : req.body.address
        })

        const dataSaver = await UserData.save();
        res.status(201).render("pay1");
        
    } catch (error) {
        res.render(error);
    }
})




app.listen(port,()=>{
    console.log(`Your Port Is Running At http://localhost:8000/`)
})