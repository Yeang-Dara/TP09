const mongoose = require('mongoose')


const dataSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    firstName: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    },

    userName: {
        type: String,
        required: true
    },


    Date: {
        type: Date,
        required: true,
        default:Date.now
    }

})

module.exports = mongoose.model('datas', dataSchema)