import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/common/footer/Footer";
import Navbar from "@/components/common/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Olympia Publishers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-screen bg-white">
        {/* <Navbar /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
