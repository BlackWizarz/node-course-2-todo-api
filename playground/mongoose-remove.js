const {ObjectID} = require('mongodb')

const { mongoose } = require('../server/db/mongoose')
const { Todo } = require('../server/models/todo')
const { User } = require('../server/models/user')

// // Todo.deleteMany
//     Todo.deleteMany({}).then((result) => {
//         console.log(result)
//     })

// // Todo.findOneAndRemove
//     Todo.findOneAndRemove({})
Todo.findOneAndDelete({ _id: "5c67bc168ed18d3a96981d40"}).then((todo) => {
    
})





"5c67bc168ed18d3a96981d40"
// Todo.findByIdAndRemove()

Todo.findByIdAndRemove().then((todo) => {
    console.log(todo)
})