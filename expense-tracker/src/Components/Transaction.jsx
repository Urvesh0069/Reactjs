import Navbar, { Sidebar } from "./Navbar";

import { useState } from "react";

export const TransactionForm = () => {
  const [transaction, setTransaction] = useState({
    title: "",
    amount: "",
    type: "income",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Transaction:", transaction);
    alert("Transaction added (Mock)");
    setTransaction({ title: "", amount: "", type: "income" });
  };

  return (
    <div className="flex items-center justify-center min-h-[70vh] rounded">
      <div className="bg-white w-100 max-xl mx-auto mt-10 p-6 rounded shadow-2xl">
        <h2 className="text-2xl font-bold mb-4 text-purple-800">
          Add Transaction
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title */}
          <div>
            <label className="block mb-1 text-gray-700">Title</label>
            <input
              type="text"
              name="title"
              value={transaction.title}
              onChange={(e) =>
                setTransaction((prev) => ({ ...prev, title: e.target.value }))
              }
              required
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-purple-400"
              placeholder="e.g. Salary, Grocery"
            />
          </div>

          {/* Amount */}
          <div>
            <label className="block mb-1 text-gray-700">Amount</label>
            <input
              type="number"
              name="amount"
              value={transaction.amount}
              onChange={(e) =>
                setTransaction((prev) => ({ ...prev, amount: e.target.value }))
              }
              required
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-purple-400"
              placeholder="₹ Amount"
            />
          </div>

          {/* Type */}
          <div>
            <label className="block mb-1 text-gray-700">Type</label>
            <select
              name="type"
              value={transaction.type}
              onChange={(e) =>
                setTransaction((prev) => ({ ...prev, type: e.target.value }))
              }
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-purple-400"
            >
              <option  value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-800 text-white py-2 rounded hover:bg-purple-900 transition"
          >
            Add Transaction
          </button>
        </form>
      </div>
    </div>
  );
};

const Transaction = () => {
  return (
    <div className="min-h-screen bg-white flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <div className="sticky top-0 z-10 bg-white shadow">
          <Navbar heading="Transaction Form" />
        </div>

        <main className="space-y-6 p-6">
          <TransactionForm />
        </main>
      </div>
    </div>
  );
};

export default Transaction;
