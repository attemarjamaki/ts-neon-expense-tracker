"use client";

import { useRef } from "react";
import addTransaction from "@/app/actions/addTransaction";
import { toast } from "react-toastify";

export default function AddTransaction() {
  const formRef = useRef<HTMLFormElement>(null);
  const clientAction = async (formData: FormData) => {
    const { data, error } = await addTransaction(formData);

    if (error) {
      toast.error(error);
    } else {
      toast.success("Transaction added");
      formRef.current?.reset();
    }
  };

  return (
    <section className="bg-background py-4 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-primary mb-4">Add transaction</h3>
          <form ref={formRef} action={clientAction} className="space-y-4">
            <div>
              <label htmlFor="text" className="block text-sm font-medium text-muted-foreground mb-1">
                Text
              </label>
              <input
                type="text"
                id="text"
                name="text"
                placeholder="Enter text..."
                className="w-full px-3 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div>
              <label htmlFor="amount" className="block text-sm font-medium text-muted-foreground mb-1">
                Amount <br /> (negative - expense, positive - income)
              </label>
              <input
                type="number"
                name="amount"
                id="amount"
                placeholder="Enter amount..."
                step="0.01"
                className="w-full px-3 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
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
      </div>
    </section>
  );
}
