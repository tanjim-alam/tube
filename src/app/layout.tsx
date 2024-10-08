import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Narbar from "./components/Navbar"
import Topbar from "./components/Topbar";
import ReviewsSection from "./components/ReviewsSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import { CartProvider } from "../context/CartContext"

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <Topbar />
          <Narbar />
          {/* <HeroSection /> */}
          <main className="">
            {children}
          </main>
          {/* <ReviewsSection /> */}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
