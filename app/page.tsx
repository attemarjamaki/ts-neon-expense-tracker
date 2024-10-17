import WelcomeSplash from "@/components/WelcomeSplash";
import { currentUser } from "@clerk/nextjs/server";
import AddTransaction from "@/components/AddTransaction";

export default async function Home() {
  const user = await currentUser();

  if (!user) {
    return <WelcomeSplash />;
  }

  return (
    <>
      <h1 className="py-12 text-4xl md:text-5xl font-bold text-center">
        Welcome, {user.firstName}
      </h1>
      <AddTransaction />
    </>
  );
}
