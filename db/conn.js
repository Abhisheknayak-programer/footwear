const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/ShoppingKart",{useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify:false,useCreateIndex:true}).then(()=>{
    console.log("We Are Connected guys");
}).catch((err)=>{
    console.log(err);
})