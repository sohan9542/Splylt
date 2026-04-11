import React from "react";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";
const MessageSection = () => {
  useGSAP(() => {
    const firstSplit = SplitText.create(".first-message", {
      type: "words",
    });
    const secondSplit = SplitText.create(".second-message", {
      type: "words",
    });
    const paragraphSplit = SplitText.create(".message-content p", {
      type: "words, lines",
      linesClass: "paragraph-line",
    });

    gsap.to(firstSplit.words, {
      color: "#faeade",
      ease: "power2.in",
      stagger: 1,
      scrollTrigger: {
        trigger: ".message-content",
        start: "top center",
        end: "top 30%",
        scrub: true,
        // markers: true
      },
    });
    gsap.to(secondSplit.words, {
      color: "#faeade",
      ease: "power2.in",
      stagger: 1,
      scrollTrigger: {
        trigger: ".second-message",
        start: "top center",
        end: "bottom center",
        scrub: true,
        // markers: true
      },
    });

    const revealTl = gsap.timeline({
      delay: 1,
      scrollTrigger: {
        trigger: ".msg-scroll-trigger",
        start: "top 60%",
        // markers: true,
        scrub: true,
      },
    });

    revealTl.to(".msg-text-scroll", {
      clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
      ease: "circ.inOut",
      duration: 1,
    });

    const paragraphTl = gsap.timeline({
      // delay: 1,
      scrollTrigger: {
        trigger: ".message-content p",
        start: "top center",
        // markers: true,
        // scrub: true,
      },
    });

    paragraphTl.from(paragraphSplit.lines, {
      yPercent: 300,
      rotate: 3,
      ease: "power1.inOut",
      duration: 1,
      stagger: 0.01,
    });

  });
  return (
    <div className="message-content">
      <div className="container mx-auto col-center py-28 relative">
        <div className="msg-wrapper">
          <h1 className="first-message">STIR UP YOUR FEARLESS PAST AND</h1>

          <div style={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }} className="msg-text-scroll">
            <div className=" bg-light-brown md:pb-5 pb-3 px-5">
              <h1 className="text-red-brown">fuel up</h1>
            </div>
          </div>

          <h1 className="second-message">
            GULP OF PERFECT Protein YOUR FUTURE WITH EVERY
          </h1>
        </div>
        <div className="md:mt-20 mt-10 flex-center ">
          <div className="max-w-md px-10 flex-center overflow-hidden">
            <p>
              Rev up your rebel spirit and feed the adventure of life with
              SPYLT, where you’re one chug away from epic nostalgia and fearless
              fun.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageSection;
