import Hero from "@/sections/home/hero";
import TrustBar from "@/sections/home/trust-bar";
import Services from "@/sections/home/services";
import Work from "@/sections/home/work";
import WhyKurarin from "@/sections/home/why-kurarin";
import CTA from "@/sections/home/CTA";
import Reveal from "@/components/reveal";

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-white">
      <Hero />

      <Reveal y={30}>
        <TrustBar />
      </Reveal>

      <Reveal y={40}>
        <Services />
      </Reveal>

      <Reveal y={40}>
        <Work />
      </Reveal>

      <Reveal y={40}>
        <WhyKurarin />
      </Reveal>

      <Reveal y={40}>
        <CTA />
      </Reveal>
    </main>
  );
}