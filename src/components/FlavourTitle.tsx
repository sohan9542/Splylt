import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const FlavourTitle = () => {
  useGSAP(() => {
    const firstTextSplit = SplitText.create(".first-text-split", {
      type: "chars",
    });
    const secondTextSplit = SplitText.create(".second-text-split", {
      type: "chars",
    });

    gsap.from(firstTextSplit.chars, {
      yPercent: 200,
      stagger: 0.02,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top 30%",
      },
    });
    gsap.from(secondTextSplit.chars, {
      yPercent: 200,
      stagger: 0.02,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top 60%",
      },
    });

    gsap.to(".flavor-text-scroll", {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      ease: "power2.in",
      duration: 1,
      scrollTrigger: {
        start: "top 30%",
        trigger: ".flavor-section",
      },
    });
  });

  return (
    <div className="general-title col-center h-full 2xl:gap-32 xl:gap-24 gap-16">
      <div className="overflow-hidden first-text-split 2xl:py-0 py-3">
        <h1 className="uppercase">We Have 6</h1>
      </div>
      <div
        style={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
        className="flavor-text-scroll"
      >
        <div className="bg-mid-brown pb-5 2xl:pt-0 pt-3 2xl:px-0 px-5">
          <h2 className="text-milk uppercase">FREaking</h2>
        </div>
      </div>
      <div className="second-text-split 2xl:py-0 py-3 overflow-hidden">
        <h1 className="uppercase">delicious flavors</h1>
      </div>
    </div>
  );
};

export default FlavourTitle;
