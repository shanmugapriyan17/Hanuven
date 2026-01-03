import { AnnouncementBar } from "./components/AnnouncementBar";
import { Header } from "./components/Header";
import { HeroSlider } from "./components/HeroSlider";
import { ProductsSection } from "./components/ProductsSection";
import { HowToUse } from "./components/HowToUse";
import { SiddhaPower } from "./components/SiddhaPower";
import { Ingredients } from "./components/Ingredients";
import { VendorSection } from "./components/VendorSection";
import { Testimonials } from "./components/Testimonials";
import { Journal } from "./components/Journal";
import { Blog } from "./components/Blog.tsx";
import { FAQ } from "./components/FAQ";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { CartModal } from "./components/CartModal";
import { FloatingElements } from "./components/FloatingElements";

export default function App() {
  return (
    <div className="min-h-screen">
      <AnnouncementBar />
      <Header />
      <main>
        <HeroSlider />
        <ProductsSection />
        <HowToUse />
        <SiddhaPower />
        <Ingredients />
        <VendorSection />
        <Testimonials />
        <Journal />
        <Blog />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <CartModal />
      <FloatingElements />
    </div>
  );
}
