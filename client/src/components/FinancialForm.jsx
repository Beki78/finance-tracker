import React, { useContext, useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { MyProvider } from "../context/FinancialRecord";

const FinancialForm = () => {
  const { records } = useContext(MyProvider);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const { user } = useUser();
  const handleSubmit = (e) => {
    e.preventDefault();
console.log(records);
    const newRecord = {
      userId: user?.id,
      date: new Date(),
      description: description,
      amount: parseFloat(amount),
      category: category,
      paymentMethod: paymentMethod,
    };

    //addRecord(newRecord)
    setDescription("");
    setAmount("");
    setCategory("");
    setPaymentMethod("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="desc">Description:</label>
          <input
            type="text"
            required
            id="desc"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </div>
        <div>
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            required
            id="amount"
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
          />
        </div>
        <div>
          <label htmlFor="option">Category:</label>
          <select
            name=""
            required
            id="option"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            <option value="">Select a category</option>
            <option value="food">Food</option>
            <option value="rent">Rent</option>
            <option value="salery">Salery</option>
            <option value="utilities">Utilities</option>
            <option value="entertainment">Entertainment</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="option">Paymentmethod:</label>
          <select
            name=""
            required
            id="option"
            onChange={(e) => setPaymentMethod(e.target.value)}
            value={paymentMethod}
          >
            <option value="">Select a category</option>
            <option value="cash">Cash</option>
            <option value="credit card">Credit Card</option>
            <option value="bank">Bank Transfer</option>
          </select>
        </div>
        <button type="submit">Add Record</button>
      </form>
    </div>
  );
};

export default FinancialForm;
