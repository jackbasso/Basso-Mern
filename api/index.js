import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

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

app.listen(8800, () => {
  console.log("Connected to backend!")
})
