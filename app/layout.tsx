// These styles apply to every route in the application
import "@/styles/globals.css";
import { Inter } from "@next/font/google";
import Toaster from "@/components/toaster";
import SignOut from "@/components/sign-out";
import AuthStatus from "@/components/auth-status";
import { unstable_getServerSession } from "next-auth/next";

const inter = Inter({
  variable: "--font-inter",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await unstable_getServerSession();
  const AuthStatusDiv = await AuthStatus();
  return (
    <html lang="en">
      <body className={inter.variable}>
        
    <div className="flex h-screen bg-black">
        <div className="w-screen h-screen flex flex-col space-y-5 justify-center items-center">
        <Toaster />
        <div className="text-white">{AuthStatusDiv}</div>
        {children}
        {session && (
        <SignOut />
        )}
      </div></div>
      </body>
    </html>
  );
}
