require('./config/config');
require('./models/db');
adminRoute = require('./api/routes/admin/admin');
userRoute = require('./api/routes/user/user');
var errHandler = require('./config/err');
var express = require('express');
var app = express();
const server = require('http').createServer(app);
const socketio = require("socket.io");
const io = socketio(server);

server.listen(process.env.PORT,()=>{
    console.log(`Server starts at port ${process.env.PORT}`);
})
var cors = require('cors');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());

io.on('connection',(socket)=>{
    console.log("We have a new connection");
    socket.on("disconnect",()=>{
        console.log("User had left!!!");
    })
})
// app.listen(process.env.PORT,()=>{
//     console.log("server starts at port ",process.env.PORT);
// });
app.use('/admin',adminRoute);
app.use('/user',userRoute);
app.use(errHandler.one);
app.use(errHandler.two);
app.use(errHandler.three);
