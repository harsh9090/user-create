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
    },
    common: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
})
module.exports = user