const {ObjectID} = require('mongodb')
const { mongoose } = require('./../server/db/mongoose')
const { Todo } = require('./../server/models/todo')
const { User } = require('./../server/models/user')
let id = "5c66ed21160af83ad89d9a29"
let userId = "5c669a0c49443d2e6caf747c"

if (!ObjectID.isValid(id)) {
    console.log('ID not valid')
}
// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos)
// })

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todos', todo)
// })

// Todo.findById(id).then((todo) => {
//     if (!todo) { 
//         return console.log('Id not found')
//     }
//     console.log('Todos By Id', todo)
// }).catch((e) => console.log(e))

User.findById(userId).then((user) => {
    if (!user) {
        return console.log('User not found')
    }
    console.log(user)
}).catch((e) => console.log(e))