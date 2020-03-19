const express = require('express')
const user=require('./models/user')
const app = express()
const contect=require('./models/contect')
require('./db/mongoose')

const port = process.env.PORT || 3000


app.use(express.json())

app.get('/user/get',async (req,res)=>{
    
    try{
        const users = await user.find({})
        res.send(users)
    }
    catch(e){
    res.send(e)
    }})



app.post('/user/create',(req,res)=>{
   
const User =new user(req.body)
User.save().then((result)=>{
    res.send(User) 
}).catch((result)=>{
    res.status(400).send(result)
})
})


app.post('/contect/create',(req,res)=>{
     
        const Contect =new contect(req.body)
        Contect.save().then((result)=>{
            res.send(Contect) 
        }).catch((result)=>{
            res.status(400).send(result)
        })
})

app.delete('/user/delete',async (req,res)=>{
    try {
        await user.remove(req.body)
        await contect.deleteMany({name1 : req.body.name })
        await contect.deleteMany({name2 : req.body.name })
        res.send(req.user)
    } catch (e) {
        res.status(500).send()
    }
})



app.listen(port, ()=>{
    console.log('server is up')
})