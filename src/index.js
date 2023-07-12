const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send('Estoy en Home');
});

app.get('/detalle-producto', (req, res) => {
    res.send('Estoy en Detalle de Producto');
});

app.get('/inicio-sesion', (req, res) => {
    res.send('Estoy en Inicio de Sesión');
});

app.get('/registrarme', (req, res) => {
    res.send('Estoy en Registrarme');
});

app.get('/carrito', (req, res) => {
    res.send('Estoy en Carrito de Compras');
});

app.listen(port, (req, res) => {
    console.log(`Server is listening on port ${port}`);
});



