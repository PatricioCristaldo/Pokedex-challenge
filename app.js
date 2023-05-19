/* Entry point */
const express = require('express')
const path = require('path')
const app = express()
const port = 3000

/* Archivos estaticos */
app.use(express.static(path.resolve(__dirname,'public')))

/* Rutas */
app.get('/',(req,res) => res.sendFile(path.resolve(__dirname,'views','index.html')))
app.get('/pokemon',(req,res) => res.sendFile(path.resolve(__dirname,'views','pokemon.html')))

/* Levantamos el servidor con app listen */
app.listen(port,function(){
    return console.log(`Se levanta el servidor en http://localhost:${port}`)
})