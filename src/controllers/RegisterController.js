const Register = require('../models/Registers');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const authConfig = require('../config/auth');

function generateToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
      expiresIn: 86400,
    });
  }

module.exports = {

    
    async store(req, res){
        const { email } = req.body;

        try {
            if(await Register.findOne({ email }))
            return res.status(400).send({error : "E-mail já existe"})
            const register = await Register.create(req.body)

            register.password = undefined;
        
        
            
            return res.send({ register, token:  generateToken({ id: register.id }),}) 
        
        }catch(err){
            return res.status(400).send({ error: "Erro no Registro"})
        }
    },

    async storeath(req, res){
        const { email, password } = req.body;

        const register = await Register.findOne({ email }).select('+password');
        
        if(!register){
        return  res.status(400).send({ error: "Error no E-mail"});
        }
        if(!await bcrypt.compare(password, register.password)){
        return res.status(400).send({ error: "Password Invalido"})
        }

        register.password = undefined;

        
    
        return res.send({ register, token:  generateToken({ id: register.id }),})
        return res.send({ register })
    },

    async storeEsquecePassword(req, res){
        const { email } = req.body;
        try{
            const user = await Register.findOne({ email });

            if(!user){
                return res.status(400).send({ error: "Usuário não existe" });
            }
            const token = crypto.randomBytes(20).toString('hex');

            const now = new Date();

            now.setHours(now.getHours() + 1);

        }catch(err){

        }
    },
    async index(req, res){
        const register = await Register.find({});
        return res.json(register);
    },

};