const mongoose = require("mongoose");
const validator = require("validator");

const InfoSchema = mongoose.Schema({
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
    },
    phone : {
        type : Number,
        required : true,
        minLength : 10,
        maxLength : 12
    },
    state : {
        type : String,
        required : true,
        lowercase : true
    },
    pincode : {
        type : Number,
        required : true
    },
    address : {
        type : String,
        required : true,
        minLength : 10
    }
    
})


const UserInformation = mongoose.model("UserInformation",InfoSchema);
module.exports = UserInformation;