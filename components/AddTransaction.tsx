"use client";

import { useRef } from "react";
import addTransaction from "@/app/actions/addTransaction";
import { toast } from "react-toastify";

export default function AddTransaction() {
  const clientAction = async (formData: FormData) => {
    const { data, error } = await addTransaction(formData);

    if (error) {
      alert(error);
    } else {
      alert("Transaction added");
      console.log(data);
    }
  };

  return (
    <section className="bg-card text-card-foreground p-6 rounded-lg shadow-md">
      <div className="max-w-md mx-auto">
        <h3 className="text-2xl font-semibold mb-4">Add transaction</h3>
        <form action={clientAction} className="space-y-4">
          <div>
            <label htmlFor="text" className="block text-sm font-medium mb-1">
              Text
            </label>
            <input
              type="text"
              id="text"
              name="text"
              placeholder="Enter text..."
              className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          <div>
            <label htmlFor="amount" className="block text-sm font-medium mb-1">
              Amount
            </label>
            <input
              type="number"
              name="amount"
              id="amount"
              placeholder="Enter amount..."
              step="0.01"
              className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md transition-colors"
          >
            Add transaction
          </button>
        </form>
      </div>
    </section>
  );
}
