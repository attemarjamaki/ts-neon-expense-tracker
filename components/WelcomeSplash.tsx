import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";

export default function WelcomeSplash() {
  return (
    <div className="bg-background flex items-center justify-center">
      <div className="container pt-20 mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">
            Welcome to Your Expense Tracker
          </h1>
          <p className="text-xl text-foreground mb-8">
            Take control of your finances and manage your transactions with
            ease.
          </p>
          <Image
            src="/images/bank-card.svg"
            alt="Expense Tracker Icon"
            width={200}
            height={200}
            className="mx-auto mb-8"
          />
          <SignedOut>
            <p className="text-lg text-muted-foreground mb-6">
              Please sign in to start managing your expenses and tracking your
              financial goals.
            </p>
            <SignInButton mode="modal">
              <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-md text-lg font-semibold transition-colors">
                Sign In to Get Started
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <p className="text-lg text-muted-foreground">
              You're signed in. Start managing your expenses now!
            </p>
          </SignedIn>
        </div>
      </div>
    </div>
  );
}
