const sequelize=require('sequelize');
const datatypes=sequelize.DataTypes;

const db=new sequelize('dbone','userone','passone',{
    host: 'localhost',
    dialect: 'mysql'
})

const items=db.define('items',{
    id:{
        type:datatypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    title:{
        type:datatypes.STRING
    },
    price:{
        type:datatypes.STRING
    },
    image:{
        type:datatypes.STRING
    }

})

db.sync({force:true});

exports=module.exports={
    items
}