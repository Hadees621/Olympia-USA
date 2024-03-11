import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Olympia Publishers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <Head>
        <link rel="icon" href="/public/assests/Icons/Olympialogomark.png" />
      </Head> */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
