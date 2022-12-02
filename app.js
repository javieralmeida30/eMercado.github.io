const express = require("express");
const app = express();

app.get('/categorias', function (req, res){
    res.header('Acces-Control-Allow-Origin', '*')
    res.json(require('./cats/cat.json'))
})

app.get('/categoria/:id', function (req, res){
    const id = req.params.id;

    try {
        res.json(require(`./cats_products/${id}.json`))
    } catch (error) {
        res.send(error)
    }
})

app.get('/numeros', function *(req, res){
    res.send('31415')
})

app.listen(3000, () => console.log("server listening on port", 3000))


