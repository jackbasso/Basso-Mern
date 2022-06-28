import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
  ordenCompra: { type: String },
  fechaCreacion: { type: Date },
  factura: { type: String },
  transferencia: { type: String },
  pagada: { type: Boolean, default: false}
})

const ProductSchema = new mongoose.Schema({
  producto: { type: Number, required: true},
  cantidad: { type: Number, required: true},
  precio:  { type: Number, required: true},
  proveedor: { type: String },
  costoImportacion: { type: Number },
  costo: { type: Number }  
})