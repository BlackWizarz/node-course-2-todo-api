require('./config/config')

let _ = require('lodash')
let  express  = require('express')
let  bodyParser  = require('body-parser')
let { ObjectID } = require('mongodb')

let { mongoose } = require('./db/mongoose')
let { Todo } = require('./models/todo')
let { User } = require('./models/user')

let app = express()
const port = process.env.PORT // set port for heroku

app.use(bodyParser.json())


app.post('/todos', (req, res) => {
    let todo = new Todo({
        text: req.body.text
    })

    todo.save().then((todo) => {
        res.send(todo)
    }, (err) => {
        res.status(400).send(err)
    })
})

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos})
    }, (err) => {
        res.status(400).send(err)
    })
})

app.get('/todos/:id', (req, res) => {
    let id = req.params.id
    if (!ObjectID.isValid(id)) {
        return res.status(404).send()
    }

    Todo.findById(id).then((todo) => {
        if (!todo) {
            return res.status(404).send()
        } 
        res.send({todo})
    }).catch((e) => res.status(400).send())
})


app.delete('/todos/:id', (req, res) => {
    let id = req.params.id

    if (!ObjectID.isValid(id)) {
        return res.status(404).send()
    }

    Todo.findByIdAndDelete(id).then((todo) => {
        if (!todo) {
            return res.status(404).send()
        }
        return res.send({todo})
    }).catch((e) => res.status(400).send())
})

app.patch('/todos/:id', (req, res) => {
    let id = req.params.id
    let body = _.pick(req.body, ['text', 'completed'])

    if (!ObjectID.isValid(id)) {
        return res.status(404).send()
    }

    if (_.isBoolean(body.completed) && body.completed) {
        body.completedAt = new Date().getTime()
    } else {
        body.completed = false
        body.completedAt = null
    }

    Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
        if (!todo) {
            return res.status(404).send()
        }
        res.send({todo})
    }).catch((e) => res.status(400).send())
})

app.listen(port, () => {
    console.log(`Starting up at port ${port}`)
})

module.exports = {
    app
}