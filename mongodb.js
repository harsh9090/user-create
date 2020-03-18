const mongodb = require('mongodb')
const mongoClient = mongodb.MongoClient
const objectId = mongodb.ObjectID


const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'user'


mongoClient.connect(connectionURL,{useNewUrlParser : true,useUnifiedTopology: true},(error,client)=>{
    if(error){
        console.log('not connected properly to database!')
    }
    const db = client.db(databaseName)
    
    // const register = db.collection('users').updateOne({description : 'work2'},{
    //     $set : {
    //         completed : true
    //     }

    // })
    // register.then((result)=>{
    //     console.log('sucess')
    // }).catch((error)=>{
    //     console.log(error)
    // })
    // const work = db.collection('userdata').insertMany({
    //     name:'madhu',
    //     age:60
    // },{
    //     name:'bhavik',
    //     age:17
    // },(error,result)=>{
    //     console.log(result)
    // })
    // const many = db.collection('users').deleteOne({age:27},{    
    //         name:'bhavik'
    // })
    // many.then((result)=>{
    //     console.log('sucess')
    // }).catch((error)=>{
    //     console.log(error)
    // })
})
