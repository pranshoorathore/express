const express = require('express');
const products = require('./Data/products');
const users = require('./Data/users');
const orders = require('./Data/orders');



const PORT = 3000;
const HOST_NAME = 'localhost'; 

const app = express();
app.use(express.json());

app.get('/', (request, response)=>{
    response.send('Welcome to my Express Server');
});
app.get('/products', (request, response)=>{
    response.send(products);
});
app.get('/product/:id', (request, response)=>{
    const product = products.filter(product => product.productId == request.params.id);
    response.send(product);
});


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



// POST

app.post('/products',(req,res)=>{
    products.push(req.body);
    res.send("product Added successfully");
});

app.post('/users',(req,res)=>{
    users.push(req.body);
    res.send("Users added Successfully");
});


// PUT user


app.put('user/:id',(req,res)=>{
   for(let i = 0;i<users.length;i++){
    if(users[i].userId == req.params.id){
        users[i].userId = req.body.userId;
        users[i].name = req.body.name;
        users[i].Address = req.body.Address;
        users[i].phone = req.body.phone;
    }
   }
   res.send('user Updated Succeddfully')
});

// put products

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

app.delete('/users/:id',(req,res)=>{
    for(let i=0;i<users.length;i++){
        if(users[i].userId==req.params.id){
            users.splice(i,1);
        }
    }
    res.send('User deleted successfully');
})




app.listen(PORT, HOST_NAME, ()=>{
    console.log(`Server started at port: ${PORT} on ${HOST_NAME}`);
});