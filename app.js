const express = require('express')
const hbs=require('hbs') //agregamos hbs
require('dotenv').config();//agregamos configuracion dotenv
const app = express()
const port = process.env.PORT //configuramos el puerto

//utilizacion de hbs para el renderizado de la pagina web
app.set('view engine','hbs')

//uso de parciales "codigo que se repite en ,as de un lugar o paginas web"
//agregamos partials
hbs.registerPartials(__dirname +'/views/partials')

//contenido estatico donde esta template
app.use(express.static('public'))


app.get('/',(req,res)=>{
   res.render('home',{  //los nombres que van aqui son del .hbs
    nombre: 'Henry Quenun',
    titulo: 'curso node'
   });
})

app.get('/pastor_aleman',(req,res)=>{ //en esta s lineas van las rutas 
  res.render('pastor_aleman',{
    nombre: 'Henry Quenun',
    titulo: 'curso node'
   });
})

//para servir en la ruta localhost:8080/hola-mundo
//app get para habilitar rutas
app.get('/chihuahua',(req,res)=>{
    res.render('chihuahua',{
    nombre: 'Henry Quenun',
    titulo: 'curso node'
   });
})



app.get('/*',(req,res)=>{
    res.render('404',{
    nombre: 'Henry Quenun',
    titulo: 'curso node'
   });
})


app.listen(port,()=>{
    console.log(`ejemplo listen ${port}`);
})