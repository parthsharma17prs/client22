import Hero from "@/components/Sections/Hero";
import ScrollingCards from "@/components/Sections/ScrollingCards";
import GlobeCTA from "@/components/Sections/GlobeCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full bg-[#0A0A0A] min-h-screen text-white selection:bg-white selection:text-black">
      <Hero />
      <ScrollingCards />
      <GlobeCTA />
      <Footer />
    </main>
  );
}
