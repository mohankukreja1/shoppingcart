const route = require('express').Router();
const path = require('path');
const arr=[];

route.get('/',(req,res)=>{
    res.render('cart',{
        arr:arr
    });
})
route.get('/add',(req,res)=>{
    arr.push(req.query.obj);
    res.redirect('/catlog');
})

exports=module.exports={
    route
}
