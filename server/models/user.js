let mongoose = require('mongoose')

let UserModel = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }
})

module.exports = {
    User : UserModel
}