import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authsRoute from './routes/auths.js';
import costsRoute from './routes/costs.js';
import expensesRoute from './routes/expenses.js';
import ordersRoute from './routes/orders.js';
import suppliersRoute from './routes/suppliers.js';
import usersRoute from './routes/users.js';

const app = express();
dotenv.config()

// Conexión BD
const connect = async () => {
  try {
    await mongoose(process.env.MONGO);
    console.log("Connected to mongoDB!")
  } catch (error) {
    throw error
  }
}

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!!")
})

//middlewares
app.use('/api/auths', authsRoute);
app.use('/api/costs', costsRoute);
app.use('/api/expenses', expensesRoute);
app.use('/api/orders', ordersRoute);
app.use('/api/suppliers', suppliersRoute);
app.use('/api/users', usersRoute);

app.listen(8800, () => {
  console.log("Connected to backend!")
})
