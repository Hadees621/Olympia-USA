import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/common/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Olympia Publishers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-screen bg-white">
        {children}
        {/* <Navbar /> */}
      </body>
    </html>
  );
}
