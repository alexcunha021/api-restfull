const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const RegisterSchema = new mongoose.Schema({
   nome:{
        type: String,
        require: true,
   },
   endereco:{
        type: String,
        require: true,

   },

    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password:{
        type: String,
        required: true,
        select: false

    },
    createAt:{
        type : Date,
        default: Date.now,
    },

});
RegisterSchema.pre('save', async function(next){
 const hash  = await bcrypt.hash(this.password, 10);
 this.password = hash;
 next();
});
module.exports = mongoose.model('Registers', RegisterSchema);