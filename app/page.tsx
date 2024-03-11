"use client"
import Navbar from "./components/nav/Navbar";
import Hero from "./components/Home/Hero";
import Services from "./components/Home/Services";
import { useState } from "react";

export default function Home() {
  const [servicesActive, setServicesActive] = useState(false);
  const handleServicesActive = () => {
    setServicesActive(!servicesActive);
  };
  return (
    <main className="bg-[#FEA61F]">
      <Navbar visibleDefault={true} fixed={false} />
      <Hero servicesAcitve={handleServicesActive}/>
      <Services servicesAcitve={handleServicesActive}/>
    </main>
  );
}
