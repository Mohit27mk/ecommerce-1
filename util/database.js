const Sequelize=require('sequelize');

const sequelize= new Sequelize('node-complete','root','27Mk2002@',{
    dialect:'mysql',
    host:'localhost'
});

module.exports=sequelize;