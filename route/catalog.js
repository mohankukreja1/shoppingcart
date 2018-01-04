const route = require('express').Router();
const path = require('path');
const items=require('../db/models').items;
var card=[];
route.get('/',(req,res)=>{
    items.findAll({}).then((arr)=>{
        console.log(arr)
       res.render('catlog',{
           card:arr
       })

    }).catch((err)=>{
        console.log(err)
    })
})


exports=module.exports={
    route
}
