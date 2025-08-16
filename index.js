const express = require('express');
const products = require('./Data/product')
const orders = require('./Data/order')
const users = require('./Data/users');
const PORT = 3000;
const HOST_NAME = "localhost"

const app = express();

app.get('/', (req, res) => {
    res.send("WELCOME TO OUR EXPRESS SERVER")
})

app.get('/products', (req, res) => {
    res.send(products)
})

app.get('/products/:id', (req, res) => {
    const product = products.filter(product => product.productId == req.params.id);
    res.send(product);
})

app.get('/orders', (req, res) => {
    res.send(orders)
})

app.get('/orders/:orderId', (req, res) => {
    const order = orders.find(order => order.orderId == req.params.orderId);
    const user = users.find(user => user.userId == order.userId);
    const product = products.find(product => product.productId == order.productId);
    const responseData = {
        orderId: order.orderId,
        productName: product? product.name: "Product Not Found",
        userName: user ? user.name : "User Not Found",
        orderDate: order.orderDate
    };
    res.send(responseData);
})

//USERS
app.get('/users', (req, res) => {
    res.send(users);
});

app.get('/users/:id', (req, res) => {
    const filteredUser = users.filter(user => user.userId == req.params.id);
    res.send(filteredUser);
})

app.listen(PORT, HOST_NAME, () => {
    console.log(`Server is running at port:${PORT} at ${HOST_NAME}`)
})