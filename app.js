const express = require('express')
const Sequelize = require('sequelize')
const app= express()

const sequelize = new Sequelize
('data','root','',{

    host:'localhost',
    dialect:'mysql'
})

const clientesModel = sequelize.define('clientes',
{
   "id":{type:Sequelize.INTEGER,primaryKey:true},
   "nomcli":Sequelize.STRING,
   "apecli":Sequelize.STRING,
   "nrodnicli":Sequelize.STRING,
   "telcli":Sequelize.STRING
})

sequelize.authenticate()
.then(()=>{
    console.log('conexion a la base de datos OK')
})

.catch(error =>{
    console.log('error de conexion a la base de datos'+ error)
})


app.listen(3000, ()=> {
    console.log('conectado')
})