const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    title:{
        type: String,
        require: true
    },
    
    postagens: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Postagem',
        require: true
    },
    assignedTo:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Registers',
        require: true

    },
    completed:{
        type: Boolean,
        require: true,
        default: false
    },
   
    createAt:{
        type: Date,
        default: Date.now
    },
});
module.exports = mongoose.model('Comment', CommentSchema );
