let express=require('express');
let path=require('path');
const config=require('./config.json');
const app=express();
const route=require('./route/admin').route
const catroute=require('./route/catalog').route
const cartroute=require('./route/cartroute').route
app.set('view engine','hbs');
app.get('/',(req,res)=>{
    res.render('admin',{});
})
app.use('/catlog',catroute);
app.use('/add',route);
app.use('/cart',cartroute)
app.listen(config.PORT,()=>{
    console.log('server started');
})