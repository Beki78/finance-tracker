import mongoose from "mongoose";

const financialSchema = new mongoose.Schema({
  userId: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  amount: {
    type: Number,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
  paymentMethod: {
    type: String,
    require: true,
  },
});

const Record = mongoose.model("FinancialRecord", financialSchema);
export default Record