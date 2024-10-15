import WelcomeSplash from "@/components/WelcomeSplash";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const user = await currentUser();

  if (!user) {
    return <WelcomeSplash />;
  }

  return (
    <>
      <h1>Welcome, {user.firstName}</h1>
    </>
  );
}
