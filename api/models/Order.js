import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
  ordenCompra: { type: String },
  fechaCreacion: { type: Date },
  factura: { type: String },
  transferencia: { type: String },
  pagada: { type: Boolean, default: false}
})

