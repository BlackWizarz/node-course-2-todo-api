let env = process.env.NODE_ENV || 'development'
console.log('env ********', env)

if (env === 'development') {
    process.env.PORT = 3000
    process.env.MONGODB_URI = "mongodb://localhost:27017/TodoApp"
} else if (env === 'test') {
    process.env.PORT = 3000
    process.env.MONGODB_URI = "mongodb://localhost:27017/TodoAppTest"
} else if (env === 'production') {
    process.env.MONGODB_URI = "mongodb://whitebnb:blacknbn1@cluster0-shard-00-00-tmsuu.mongodb.net:27017,cluster0-shard-00-01-tmsuu.mongodb.net:27017,cluster0-shard-00-02-tmsuu.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true"
}