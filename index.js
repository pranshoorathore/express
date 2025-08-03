const express = require('express');
const products = require('./data.js')

const PORT = 3000;
const HOST_NAME = 'localhost'; 

const app = express();

app.get('/', (request, response)=>{
    response.send('Welcome to my Express Server');
});
app.get('/products', (request, response)=>{
    response.send(products);
});
app.get('/product/:id', (request, response)=>{
    const product = products.filter(product=>product.id == request.params.id);
    response.send(product);
});
// app.post();
// app.put();
// app.delete();

app.listen(PORT, HOST_NAME, ()=>{
    console.log(`Server started at port: ${PORT} on ${HOST_NAME}`);
});