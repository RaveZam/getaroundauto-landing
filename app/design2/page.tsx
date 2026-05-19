import { Header } from "@/components/site2/Header";
import { Hero } from "@/components/site2/Hero";
import { FeaturedInventory } from "@/components/site2/FeaturedInventory";
import { WhyChooseUs } from "@/components/site2/WhyChooseUs";
import { Services } from "@/components/site2/Services";
import { Testimonials } from "@/components/site2/Testimonials";
import { Contact } from "@/components/site2/Contact";
import { Footer } from "@/components/site2/Footer";
import { DesignSwitcher } from "@/components/DesignSwitcher";

export default function Design2() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <FeaturedInventory />
        <WhyChooseUs />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <DesignSwitcher current="2" />
    </>
  );
}
