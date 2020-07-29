var express = require('express');
var router = express.Router();
router.get('/',(req,res)=>{
    res.send('hello world from user');
});
module.exports = router;