import { Wix_Madefor_Display } from "next/font/google";
import "./globals.css";

import Header from "@/_components/header";
import Footer from "@/_components/footer";
import { fetchData } from "@/utils/api";
import { ServicesProvider } from "@/context/ServicesContext";

const wixMadeforDisplay = Wix_Madefor_Display({ subsets: ["latin"] });

export const metadata = {
  title: "Garden Gems",
  description: "Access the finest landscaping services today",
};

export default async function RootLayout({ children }) {
  const services = await fetchData("/services");
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${wixMadeforDisplay.className} m-0 p-0 text-amber-200 tracking-[-0.04em]`}
      >
        <Header services={services} />
        <ServicesProvider services={services}>{children}</ServicesProvider>
        <Footer services={services} />
      </body>
    </html>
  );
}
