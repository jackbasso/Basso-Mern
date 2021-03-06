import mongoose from 'mongoose';

const expenseSchema = new mongoose.Schema({
  removed: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  name: {
    type: String,
    trim: true,
    required: true,
  },
  description: {
    type: String,
    trim: true,
  },
  ref: {
    type: String,
    trim: true,
  },
  supplier: {
    type: mongoose.Schema.ObjectId,
  },
  OrderForm: {
    type: mongoose.Schema.ObjectId,
  },
  expenseCategory: {
    type: mongoose.Schema.ObjectId,
    ref: 'ExpenseCategory',
    required: true,
  },
  subTotal: {
    type: Number,
  },
  taxTotal: {
    type: Number,
  },
  total: {
    type: Number,
  },
  paymentMode: {
    type: mongoose.Schema.ObjectId,
    ref: 'PaymentMode',
  },
  attachedFile: {
    type: String,
  },
  updated: {
    type: Date,
    default: Date.now,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Expense', expenseSchema);