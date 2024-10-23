import { currentUser } from "@clerk/nextjs/server";
import getUserBalance from "@/app/actions/getUserBalance";
import getIncomeExpense from "@/app/actions/getIncomeExpense";

const Dashboard = async () => {
  const user = await currentUser();
  const { balance } = await getUserBalance();
  const { income, expense } = await getIncomeExpense();

  return (
    <>
      <section className="bg-background py-4 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">
              Welcome, {user?.firstName}
            </h2>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-medium text-muted-foreground">
                  Your Balance
                </h4>
                <h1 className="text-3xl md:text-4xl font-bold">
                  $
                  {balance?.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </h1>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">
                    Income
                  </h4>
                  <p className="text-xl font-semibold text-green-500">
                    $
                    {income?.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </p>
                </div>
                <div className="h-10 w-px bg-border"></div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">
                    Expenses
                  </h4>
                  <p className="text-xl font-semibold text-red-500">
                    $
                    {expense?.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
