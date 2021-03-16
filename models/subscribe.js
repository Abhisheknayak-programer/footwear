const mongoose = require("mongoose");
const validator = require("validator");

const SubscribeSchema = mongoose.Schema({
    name : {
        type : String,
        required : true,
        minLength : 2
    },
    email : {
        type : String,
        required : true,
        lowercase : true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email");
            }
        }
    }
})


const Subscribe = new mongoose.model("Subscribe",SubscribeSchema);
module.exports = Subscribe;