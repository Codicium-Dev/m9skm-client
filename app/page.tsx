"use client";
import { Button } from "@/components/ui/button";
import Navbar from "./components/nav/Navbar";

export default function Home() {
  return (
    <main className="">
      <Navbar visibleDefault={true} fixed={false} />
      Home
    </main>
  );
}
