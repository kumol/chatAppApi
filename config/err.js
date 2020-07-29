var express = require('express');
var app = express();

module.exports.one = ((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers',
    'Origin,X-Requested-With,Content-Type,Accept,Authorization');
    if(req.method==='OPTIONS'){
        res.header('Access-Control-Allow-Methods','PUT,PATCH,GET,DELETE,POST')
        return res.status(200).json({});
    }
    next();
});

module.exports.two = ((req,res,next)=>{
    const error = new Error('Not Found');
    error.status=404;
    next(error);
});

module.exports.three = ((error,req,res,next)=>{
    res.status(error.status||500);
    res.json({
        error:error.message
    });
});