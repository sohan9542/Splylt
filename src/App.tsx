import Navbar from "./components/Navbar";
import Hero from "./sections/HeroSection";
import gsap from "gsap";
import { ScrollTrigger, ScrollSmoother } from "gsap/all";
import MessageSection from "./sections/MessageSection";
import FlavourSection from "./sections/FlavourSection";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    });
  });

  return (
    <div>
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Hero />
          <MessageSection />
          <FlavourSection />
          {/* Spacer for horizontal flavor scrub scroll room */}
          <div className="min-h-screen" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
};

export default App;
