const express = require('express');
const middlewaresAuth = require('../middlewares/auth');
const Postagens = require('../models/Postagem');
const Comments = require('../models/Comment');
const router = express.Router();

router.use(middlewaresAuth)
router.get('/', async(req, res) =>{
        try{
            postagem = await Postagens.find().populate('user');
            console.log(postagem)
            return res.send({
                postagem
            });
            
        }catch(err){

            return res.status(400).send({ error: "Error na Listagem"})
        }
    });


    router.post('/', async (req, res) => {
        try{
            const { message, comment} = req.body;
    
            const postagem = await Postagens.create({message, user: req.registerId });

            comment.map(comments =>{
                const commentPost = new Comment({ ...comments, postagem: postagem._id });

                commentPost.save().then(comments => postagem.comment.push(comments));
            });
            await  postagem.save();
            return res.send({ postagem });

        }catch(err){
            console.log(err);
        }
    });
    

router.get('/:PostagensId', async (req, res) =>{
    try{
    const postagem = await Postagens.findById(req.params.PostagensId).populate('user');

    return res.send({postagem});
    }catch(err){
        
            return res.status(400).send({ error: 'ERROR NO POSTAGEM UNICA'})
        
    }
});

router.put('/:PostagensId', async (req, res) =>{
    res.send({
        user: req.registerId
    });
});
router.delete('/:PostagensId', async (req, res) =>{
    try{
        const postagem = await Postagens.findByIdAndDelete(req.params.PostagensId).populate('user');
    
        return res.send();
        }catch(err){
            
                return res.status(400).send({ error: 'ERROR AO DELETAR'})
            
        }
});

    
 router.get('/:PostagensId', async (req, res) =>{

 })   


module.exports = ('/project',router);        