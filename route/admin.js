const route = require('express').Router();
const multer = require('multer');
const path = require('path');
const items=require('../db/models').items

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './images')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now()+ path.extname(file.originalname))
    }
})

var upload = multer({ storage: storage }).single('pic');
route.post('/',(req,res)=>{
    upload(req, res, function (err) {
        if (err) {
            // An error occurred when uploading
            console.log(err);
            return ;
        }
        items.create({
            title:req.body.title,
            price:req.body.price,
            image:`images/${req.file.filename}`

        }).then(()=>{

        }).catch((err)=>{
            console.log(err);
        })
        res.redirect('/');
        // Everything went fine
    })
})

exports=module.exports={
    route
}