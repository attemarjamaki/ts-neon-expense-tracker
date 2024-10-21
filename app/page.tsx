import WelcomeSplash from "@/components/WelcomeSplash";
import { currentUser } from "@clerk/nextjs/server";
import AddTransaction from "@/components/AddTransaction";
import Dashboard from "@/components/Dashboard";
import TransactionList from "@/components/TransactionList";

export default async function Home() {
  const user = await currentUser();

  if (!user) {
    return <WelcomeSplash />;
  }

  return (
    <>
      <Dashboard />
      <AddTransaction />
      <TransactionList />
    </>
  );
}
