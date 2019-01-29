const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

//mongodb://alexcunha:beatles23_@ds053877.mlab.com:53877/suscolaborativo
mongoose.connect('mongodb://localhost:27017/testeSus', {
  useNewUrlParser: true  
});

mongodb://localhost:27017/nodeapi

app.use((req, res, next)=>{
    req.io = io;

    return next();
});

app.use(cors());
app.use(express.json());
app.use(require('./routes'));
app.use(require('./controllers/ProtectController'));
server.listen(3000, ()=>{
    console.log('Server started on port 3000')
});