import Destinations from "@/components/Destinations";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Destinations />
      <Testimonials />
      <Stats />
      <CTA />
    </main>
  );
}