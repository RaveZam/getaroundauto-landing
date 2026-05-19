import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { FeaturedInventory } from "@/components/site/FeaturedInventory";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { Services } from "@/components/site/Services";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <FeaturedInventory />
        <Contact />
        <WhyChooseUs />
        <Services />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
