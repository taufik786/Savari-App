const mongoose = require('mongoose');

const userSchem = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cnfpassword: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('userData', userSchem);