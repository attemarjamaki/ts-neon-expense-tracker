"use client";

import { useState, useEffect } from "react";
import getTransactions from "@/app/actions/getTransactions";
import deleteTransaction from "@/app/actions/deleteTransaction";
import { Transaction } from "@/types/Transaction";
import { toast } from "react-toastify";

const TransactionList = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      setLoading(true);
      const { transactions, error } = await getTransactions();
      if (error) {
        setError(error);
      } else {
        setTransactions(transactions || []);
      }
      setLoading(false);
    };

    fetchTransactions();
  }, []);

  const handleDeleteTransaction = async (transactionId: string) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this transaction?"
    );
    if (!confirmed) return;

    const { message, error } = await deleteTransaction(transactionId);

    if (error) {
      toast.error(error);
    } else {
      toast.success(message);
      setTransactions((prev) =>
        prev.filter((transaction) => transaction.id !== transactionId)
      );
    }
  };

  if (error) {
    return <p className="error">{error}</p>;
  }

  return (
    <section className="bg-background py-8 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-primary mb-4">
            Transaction History
          </h3>
          {transactions.length === 0 ? (
            <p className="text-muted-foreground">No transactions to display.</p>
          ) : (
            <ul className="space-y-2">
              {transactions.map((transaction) => (
                <li
                  key={transaction.id}
                  className="flex justify-between items-center p-3 bg-gray-50 rounded-md border border-gray-200"
                >
                  <span className="text-gray-800">{transaction.text}</span>
                  <div className="flex items-center space-x-2">
                    <span
                      className={`font-medium ${
                        transaction.amount < 0
                          ? "text-red-500"
                          : "text-green-500"
                      }`}
                    >
                      {transaction.amount < 0 ? "-" : "+"}$
                      {Math.abs(transaction.amount).toFixed(2)}
                    </span>
                    <button
                      className="bg-red-500 text-white p-1 rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                      onClick={() => handleDeleteTransaction(transaction.id)}
                      aria-label="Delete transaction"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

export default TransactionList;
