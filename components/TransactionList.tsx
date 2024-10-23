import getTransactions from "@/app/actions/getTransactions";
import { Transaction } from "@/types/Transaction";

const TransactionList = async () => {
  const { transactions, error } = await getTransactions();

  if (error) {
    return <p className="error">{error}</p>;
  }

  return (
    <>
      <section className="bg-background py-8 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-primary mb-4">
              Transaction History
            </h3>
            {transactions && transactions.length === 0 ? (
              <p className="text-muted-foreground">
                No transactions to display.
              </p>
            ) : (
              <ul className="space-y-2">
                {transactions &&
                  transactions.map((transaction: Transaction) => (
                    <li
                      key={transaction.id}
                      className="flex justify-between items-center p-3 bg-background rounded-md border border-input"
                    >
                      <span className="text-foreground">
                        {transaction.text}
                      </span>
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
                    </li>
                  ))}
              </ul>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default TransactionList;
