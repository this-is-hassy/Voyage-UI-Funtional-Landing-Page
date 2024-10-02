import type { Metadata } from "next";
import "./globals.css";
import GoToTop from "../components/GoToTop";
import { FirebaseProvider } from "../context/Firebase";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth scrollbar">
      <body className="relative bg-stone-50 dark:bg-[#18181B] ">
        <FirebaseProvider>
          <GoToTop />
          {children}
        </FirebaseProvider>
      </body>
    </html>
  );
}
