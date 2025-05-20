import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Payment() {
  const [amount, setAmount] = useState('');
  const [method, setMethod] = useState('Credit Card');
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    alert('✅ Payment successful!');
    setAmount('');
    setMethod('Credit Card');
    navigate('/generate-invoice');
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-center"> Fee Payment</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-gray-700 mb-1">Amount:</label>
          <input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={e => setAmount(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Payment Method:</label>
          <select
            value={method}
            onChange={e => setMethod(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>Credit Card</option>
            <option>Debit Card</option>
            <option>Net Banking</option>
            <option>UPI</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition mt-50"
        >
          Make Payment
        </button>
      </form>
      <div className="mt-4 text-sm text-gray-500 text-center">
        For any payment issues, contact the accounts department.
      </div>
    </div>
  );
}

export default Payment;