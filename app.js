const express = require('express');
const app = express();

const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

app.use('/products',productRoutes);
app.use('/orders',orderRoutes);
module.exports = app;




changes from my window



changes from mac>>>



	add more lines here



add form develop from window
