import { Wix_Madefor_Display } from "next/font/google";
import "./globals.css";

import Header from "@/_components/header";
import Footer from "@/_components/footer";

const wixMadeforDisplay = Wix_Madefor_Display({subsets: ["latin"]})

export const metadata = {
  title: "Garden Gems",
  description: "Access the finest landscaping services today",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${wixMadeforDisplay.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
