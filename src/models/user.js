const mongoose = require('mongoose')

const user = mongoose.model('userdata',{
    name:{
        type:String,
        required:true,
        trim: true
    },
    email:{
        type:String,
        required:true,
        trim: true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        trim: true
    },
    address:{
        type:String,
        required:true,
        trim: true
    },
    phone:{
        type:Number,
        required:true,
        trim: true,
        unique:true
    },
    DOB:{
        type:Date,
        required:true,
        trim: true
    }
})
module.exports = user