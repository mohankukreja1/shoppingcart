const route = require('express').Router();
const path = require('path');
const items=require('../db/models').items;

route.get('/',(req,res)=>{
    items.findAll({}).then((arr)=>{
        console.log(arr);
        res.render('catlog',{
            image:'../'+arr[0].dataValues.image,
            title:arr[0].dataValues.title,
            price:arr[0].dataValues.price
        })
    }).catch((err)=>{
        console.log(err)
    })
})


exports=module.exports={
    route
}
