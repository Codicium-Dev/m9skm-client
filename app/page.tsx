import Navbar from "./components/nav/Navbar";
import Hero from "./components/Home/Hero";

export default function Home() {
  return (
    <main className="bg-[#FEA61F]">
      <Navbar visibleDefault={true} fixed={false} />
      <div className="container">
        <Hero />
      </div>
    </main>
  );
}
