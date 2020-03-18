const mongoose = require('mongoose')

const user = mongoose.model('contect',{
    name1:{
        type:String,
        required:true,
        trim: true
    },
    name2:{
        type:String,
        require:true,
        trim:true
    }
})
module.exports = user