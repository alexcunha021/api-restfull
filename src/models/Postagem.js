const mongoose = require('mongoose');

const PostagemSchema = new mongoose.Schema({

    
   message:{
        type: String,
        require: true,
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Registers',
        require: true
    },
    comment: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }],

    createAt:{
        type: Date,
        default: Date.now
    },
});
module.exports = mongoose.model('Postagem', PostagemSchema );
