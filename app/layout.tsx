import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import Footer from "@/components/Footer/Footer";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Inkly",
  description: "A Blog application",
};
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <div className="wrapper">
            <Navbar />
            {children} <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
