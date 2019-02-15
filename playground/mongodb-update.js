// const MongoClient = require('mongodb').MongoClient
const { MongoClient, ObjectID } = require('mongodb')


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to Mongodb server')
    }
    console.log('Connected to Mongodb server')

    // findOneAndUpdate
    // db.collection('Todos').findOneAndUpdate({text: 'Eat lunch'},{ $set: {
    //     completed: true
    // }}, {
    //     returnOriginal: false
    // }).then((res) => {
    //     console.log(res)
    // })

    db.collection('Users').findOneAndUpdate({name: 'Andrew'}, {
        $set: {
            name: 'Black'
        },
        $inc: {
            age: 100
        }
    }, {
        returnOriginal: false
    }).then((res) => {
        console.log(res)
    })

    // db.close()
})