const express = require('express');
const products = require('./Data/product')
const orders = require('./Data/order')
const users = require('./Data/users');
const PORT = 3000;
const HOST_NAME = "localhost"


const app = express();
app.use(express.json())

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

// POST
app.post('/products',(req,res)=>{
    products.push(req.body);
    res.send('Product Added Successfully');
})        

// PUT
app.put('/products/:id',(req,res)=>{
    for (let i=0;i<products.length;i++){
        if(products[i].productId==req.params.id){
            products[i].productId=req.body.productId;
            products[i].name=req.body.name;
            products[i].price=req.body.price;
            products[i].category=req.body.category;
        }
    }
    res.send('Product Updated Successfully')
});

// DELETE
app.delete('/products/:id',(req,res)=>{
    for(let i=0;i<products.length;i++){
        if(products[i].productId==req.params.id){
            products.splice(i,1);
        }
    }
    res.send('Product deleted successfully');
})


// USER 
//POST-CREATE NEW DATABASE

app.post('/users',(req,res)=>{
    users.push(req.body);
    res.send('Users Added Successfully');
})        


// PUT-UPDATE THE DATA
app.put('/users/:id',(req,res)=>{
    for (let i=0;i<users.length;i++){
        if(users[i].userId==req.params.id){
            users[i].userId=req.body.userId;
            users[i].name=req.body.name;
            users[i].address=req.body.address;
            users[i].phone=req.body.phone;
        }
    }
    res.send('User Updated Successfully')
});

// USER-DELETE
app.delete('/users/:id',(req,res)=>{
    for(let i=0;i<users.length;i++){
        if(users[i].userId==req.params.id){
            users.splice(i,1);
        }
    }
    res.send('User deleted successfully');
})


app.listen(PORT, HOST_NAME, () => {
    console.log(`Server is running at port:${PORT} at ${HOST_NAME}`)
})