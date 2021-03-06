const Post = require('../models/Posts');

module.exports = {

    async index(req, res){
        const posts = await Post.find({}).sort('-createAt');
        return res.json(posts);
    },

    async store(req, res){
       
        const post = await Post.create(req.body)
        
        req.io.emit('post', post);

        return res.json(post);
    },
};