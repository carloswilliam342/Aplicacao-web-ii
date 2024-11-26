import express from 'express'

var app = express()

app.get('/', function(req, res){
    res.send("Hello World")
})

app.listen(3000, function(){
    console.log('Servidor em http:localhost:3000')
})