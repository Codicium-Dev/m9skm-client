"use client"
import Navbar from "./components/nav/Navbar";
import Hero from "./components/Home/Hero";
import Services from "./components/Home/Services";
import { useState } from "react";
import Matches from "./components/Home/Matches";
import ShowCase from "./components/Home/ShowCase";
import News from "./components/Home/News";

export default function Home() {
  return (
    <main className="bg-[#FEA61F]">
      <Navbar visibleDefault={true} fixed={false} />
      <Hero />
      <Services />
      <Matches  />
      <ShowCase  />
      <News  />
    </main>
  );
}
