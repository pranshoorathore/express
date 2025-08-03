const express = require('express');

const PORT = 3000;
const HOST_NAME = 'localhost'; 

const app = express();

app.listen(PORT, HOST_NAME, ()=>{
    console.log(`Server started at port: ${PORT} on ${HOST_NAME}`);
});