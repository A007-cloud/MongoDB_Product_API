const express = require('express');
require('dotenv').config();

const connectDB = require('./db/connect');
const Products = require('./router/productRoute');

const app = express();
const port = process.env.PORT;

app.use(express.json());

//Router middleware
app.use('api/v1/products', Products);

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(port, () => {
      console.log(`server listening on ${port}`);
    });
  } catch (error) {
    console.log(error.message);
  }
};

// app.listen(3000);

start();
