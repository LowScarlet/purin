import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PageTransition from "./components/PageTransition";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Purin Kokoa - Unofficial Purin Kokoa fansite",
  description: "An unofficial Purin Kokoa fansite aimed at supporting her overseas by sharing information about her character, career, and more! This website was made by fans, for fans!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PageTransition key="">
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
