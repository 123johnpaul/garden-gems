"use client";
import { useState, useEffect } from "react";

import Header from "@/_components/header";
import Footer from "@/_components/footer";

import { fetchData } from "@/utils/api";

export default function PageLayout({ children }) {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const loadServices = async () => {
      const data = await fetchData("/services");
      setServices(data);
    };
    loadServices();
  }, []);
  return (
    <>
      <Header services={services} />
      {children}
      <Footer services={services} />
    </>
  );
}
