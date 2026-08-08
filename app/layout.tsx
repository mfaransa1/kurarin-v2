import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
//import DebugLayoutProbe from "@/components/debug-layout-probe";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kurarin Solutions",
  description: "Modern software and digital solutions company.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}