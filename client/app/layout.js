import { Wix_Madefor_Display } from "next/font/google";
import "./globals.css";
import PageLayout from "@/_components/PageLayout";

const wixMadeforDisplay = Wix_Madefor_Display({ subsets: ["latin"] });

export const metadata = {
  title: "Garden Gems",
  description: "Access the finest landscaping services today",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${wixMadeforDisplay.className} m-0 p-0 text-amber-200 tracking-[-0.04em]`}
      >
        <PageLayout>{children}</PageLayout>
      </body>
    </html>
  );
}
