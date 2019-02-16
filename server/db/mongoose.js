let mongoose = require('mongoose')


mongoose.Promise = global.Promise
const dbMlab = "mongodb://whitebnb:blacknbn1@cluster0-shard-00-00-tmsuu.mongodb.net:27017,cluster0-shard-00-01-tmsuu.mongodb.net:27017,cluster0-shard-00-02-tmsuu.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true"
const dbLocalhost = "mongodb://localhost:27017/TodoApp"
mongoose.connect(process.env.PORT ? dbMlab : dbLocalhost, { useNewUrlParser: true })

module.exports = {
    mongoose
}