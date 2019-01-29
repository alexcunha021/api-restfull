const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    nome:{
        type: String,
        required: true
    },
    sobrenome:{
        type: String,
        required: true
    },
    endereco:{
        type: String,
        required: true
    },
    createAt:{
        type: Date,
        default: Date.now
    }

});



module.exports = mongoose.model('Users', UserSchema );