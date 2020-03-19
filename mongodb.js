const mongodb = require('mongodb')
const mongoClient = mongodb.MongoClient


const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'user'


mongoClient.connect(connectionURL,{useNewUrlParser : true,useUnifiedTopology: true},(error,client)=>{
    if(error){
        console.log('not connected properly to database!')
    }
    const db = client.db(databaseName)
    
})
