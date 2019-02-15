// const MongoClient = require('mongodb').MongoClient
const { MongoClient, ObjectID } = require('mongodb')


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to Mongodb server')
    }
    console.log('Connected to Mongodb server')

    // db.collection('Todos').find({ 
    //     _id: new ObjectID("5c668006a0874f6c011c1286")
    // }).toArray().then((docs) => {
    //     console.log('Todos')
    //     console.log(JSON.stringify(docs, undefined, 2))
    // }, (err) => {
    //     console.log('Unable to fetch to do', err)
    // })

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`)
    // }, (err) => {
    //     console.log('Unable to fetch to do', err)
    // })

    db.collection('Users').find({
        name: 'Andrew'
    }).toArray().then((res) => {
        console.log(JSON.stringify(res, undefined, 2))
    })

    // db.close()
})