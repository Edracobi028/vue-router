/* Crearemos un servidor web para este ejercicio para el modo produccion creado con codigo expressJs */

//creamos una variable para importar la libreria express con la funcion require() indicando la libreria
//instalarla con el comando "npm i -S express" para poder crear aplicaciones de express.Js
const express = require('express')

//creamos una constante llamada app para hacer una isntancia al framework exprerss
const app = express()

//Tenemos que decirle como resolver cada peticion hacia el backend

//hacer la carpeta dist estatico para que pueda ser encontrado desde su url, indicanto en la funcion static el nombre de la carpeta
app.use(express.static('dist'))

//usamos una funcion para que escuche al servidor e pasandole el puerto
//una vez iniciado activamos un arrowFunction que nos imprima un msj
app.listen(8080, () => {
    console.log(`localhost:8080`)
})

//Arrancar el proyecto con el comando: node server.js