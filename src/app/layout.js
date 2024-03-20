import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/common/footer/Footer";
import Navbar from "@/components/common/navbar/Navbar";
import SmNavbar from "@/components/common/navbar/SmNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Olympia Publishers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assests/Icons/Olympialogomark.png" />
      </head>
      <body className="h-screen bg-white">
        <div className="lg:hidden">
          <SmNavbar />
        </div>
        <div className="hidden lg:block">
          <Navbar />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
