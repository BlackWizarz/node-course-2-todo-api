// const MongoClient = require('mongodb').MongoClient
const { MongoClient, ObjectID } = require('mongodb')


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to Mongodb server')
    }
    console.log('Connected to Mongodb server')

    // // deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((res) => {
    //     console.log(res)
    // })

    // deleteOne
    // db.collection('Todos').deleteOne({ text: 'Eat lunch' }).then((res) => {
    //     console.log(res)
    // })

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({ completed: false }).then((res) => {
    //     console.log(res)
    // })

    db.collection('Users').deleteMany({name: 'Andrew'}).then((res) => {
        console.log(res.result)
    })

    db.collection('Users').findOneAndDelete({
        _id: new ObjectID("5c6679558f6f2f1634c810f8")}).then((res) => {
            console.log(res)
        })
    // db.close()
})