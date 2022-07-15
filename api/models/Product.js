import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  producto: { type: Number, required: true},
  cantidad: { type: Number, required: true},
  precio:  { type: Number, required: true},
  proveedor: { type: String },
  costoImportacion: { type: Number },
  costo: { type: Number }  
})