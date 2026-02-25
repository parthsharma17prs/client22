import Hero from "@/components/Sections/Hero";
import VillaIntro from "@/components/Sections/VillaIntro";
import Destinations from "@/components/Sections/Destinations";
import GlobeCTA from "@/components/Sections/GlobeCTA";

export default function Home() {
  return (
    <main className="w-full bg-black min-h-screen text-white selection:bg-[#1FB4B4] selection:text-black">
      <Hero />
      <VillaIntro />
      <Destinations />
      <GlobeCTA />
    </main>
  );
}
