import Hero from "@/sections/home/hero";
import TrustBar from "@/sections/home/trust-bar";
import Services from "@/sections/home/services";
import Work from "@/sections/home/work";
import WhyKurarin from "@/sections/home/why-kurarin";
import CTA from "@/sections/home/cta";

export default function Home() {
  return (
    <main>
      <Hero />

      <TrustBar />

      <Services />

      <Work />

      <WhyKurarin />

      <CTA />
    </main>
  );
}