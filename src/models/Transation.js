import mongoose, { Schema, models } from 'mongoose';

const TransactionSchema = new Schema({
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  transactionType: {
    type: String,
    required: true,  
    enum: ['Deposit', 'Withdrawal', 'Transfer'],  
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',  
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
  status: {
    type: String,
    default: 'Completed',  
    enum: ['Completed', 'Pending', 'Failed'],
  },
  category: {
    type: String,
    enum: ['Groceries', 'Rent', 'Salary', 'Entertainment', 'Bills'],  
    default: 'Other',
  },
});

const Transaction = models.Transaction || mongoose.model('Transaction', TransactionSchema);

export default Transaction;
