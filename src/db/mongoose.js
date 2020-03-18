const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/user',{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

// const me = new user({
//     name:'harsh',
//     age:19,
//     email:'harsh@gmail.com',
//     password:'harsh9090'
// })
// me.save().then((result)=>{
//     console.log(me)
// }).catch((error)=>{
//     console.log('failed',error)
// })





// const Task = new task({
//     description:'trying something new'
// })

// Task.save().then((result)=>{
//     console.log(Task)
// }).catch((result)=>{
//     console.log(result)
// })