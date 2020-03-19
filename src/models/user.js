const mongoose = require('mongoose')
const validator=require('validator')
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim: true
    },
    email:{
        type:String,
        required:true,
        trim: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
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
        validate(value) {
            if (value < 0) {
                throw new Error('Number must be postive number')
            }
        }
    },
    DOB:{
        type:Date,
        required:true,
        trim: true,
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User