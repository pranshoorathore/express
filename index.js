const express = require('express');
const product = require ('./Data/product')
const order = require ('./Data/order')
const PORT = 3000;
const HOST_NAME ="localhost"

const app = express();

app.get('/',(req,res)=>{
    res.send("WELCOME TO OUR EXPRESS SERVER")
})

app.get('/products',(req,res)=>{
    res.send(product)
})

app.get('/products/:id',(req,res)=>{
     const filteredProduct = product.filter(product=>product.id == req.params.id);
    res.send(filteredProduct)
})

app.get('/orders',(req,res)=>{
    res.send(order)
})

app.get('/orders/:id',(req,res)=>{
    const filteredOrder = order.filter(order=>order.orderId == req.params.id);
    res.send(filteredOrder)
})


app.listen(PORT,()=>{
    console.log(`Server is running at port:${PORT} at ${HOST_NAME}`)
})