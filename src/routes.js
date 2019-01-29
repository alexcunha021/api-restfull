const express  = require('express');

const routes = express.Router();
const RegisterController = require('./controllers/RegisterController');
const UserController = require('./controllers/UserController');
const PostController = require('./controllers/PostController');
const LikeController = require('./controllers/LikeController');



routes.get('/posts', PostController.index);
//routes.get('/auth', ProtectMiddlewares.lis);
routes.post('/posts', PostController.store);
routes.post("/users", UserController.store);
routes.post("/registers", RegisterController.store);
routes.post("/registers", RegisterController.index);
routes.post("/auther", RegisterController.storeath);
routes.post('/likes/:id', LikeController.store);





module.exports = routes;