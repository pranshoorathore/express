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

// ORDER

app.get('/orders',(request,response)=>{
    response.send(orders);
});

app.get('/order/:orderId',(request,response)=>{
    const order = orders.find(order=>order.orderId == request.params.orderId);

    const user = user.find(user =>user.userId);
    const product = products.find(product => product.producId == order.producId);

    const responseData = {
        orderId: order.orderId,
        productName: product ? product.name : "Unknown Product",
        userName: user ? user.name : "Unknown user",
        orderDate: order.orderDate
    };
    response.send(responseData);
});

// User

app.get('/users',(request,response)=>{
    response.send(users);
});

app.get('/user/:id',(request,response)=>{
    const user = users.filter(user=>user.id == request.params.id);
    response.send(user);
});

app.listen(PORT, HOST_NAME, ()=>{
    console.log(`Server started at port: ${PORT} on ${HOST_NAME}`);
});