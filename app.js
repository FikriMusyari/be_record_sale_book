const express = require('express');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const customerRoutes = require('./routes/customerRoutes');
const productRoutes = require('./routes/productRoutes');
const productOrderRoutes = require('./routes/productOrderRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const queueRoutes = require('./routes/queueRoutes');
const statusRoutes = require('./routes/statusRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/customers', customerRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', productOrderRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/queue', queueRoutes);
app.use('/api/status', statusRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Record Sale Book API');
});

module.exports = app;
