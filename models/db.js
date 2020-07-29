var config = require('../config/config')
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI,{ useNewUrlParser: true },(err)=>{
    if(!err){
        console.log('Database connect successfully');
    }else{
        console.log(err);
    }
});
mongoose.Promise = global.Promise;