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
    // create the scrollSmoother before your scrollTriggers
    ScrollSmoother.create({
      smooth: 3, // how long (in seconds) it takes to "catch up" to the native scroll position
      effects: true, // looks for data-speed and data-lag attributes on elements
      // smoothTouch: 0.1 // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
    });
  })
  return (
    <div>
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Hero />
          <MessageSection />
          <FlavourSection />
          <div className="min-h-screen">
          </div>
        </div>
      </div>

    </div>
  );
};

export default App;
