import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";
const Hero = () => {
  useGSAP(() => {
    const title = SplitText.create(".hero-title", {
      type: "chars",
    });
    const tl = gsap.timeline({
      delay: 1,
    });

    tl.to(".hero-content", {
      opacity: 1,
      y: 0,
      ease: "power2.inOut",
    })
      .to(
        ".hero-text-scroll",
        {
          duration: 1,
          ease: "circ.inOut",
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        },
        "-=0.5",
      )
      .from(
        title.chars,
        {
          yPercent: 100,
          stagger: 0.02,
          ease: "power2.out",
        },
        "-=0.8",
      );

    const herotl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-container",
        start: "1% top",
        end: "bottom top",
        scrub: true,
     
      },
    });

    herotl.to(".hero-container",{
      rotate: 7,
      scale: 0.9,
      yPercent: 30,
      ease: "power2.inOut"
    })
  });
  return (
    <div className="bg-main-bg">
      <div className="hero-container">
        <img
          src="\images\static-img.png"
          alt="hero-img"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 object-auto scale-100 md:scale-150"
        />
        <div className="hero-content opacity-0">
          <div className="overflow-hidden col-center">
            <h1 className="hero-title">Freaking Delicious</h1>
            <div
              style={{ clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)" }}
              className="hero-text-scroll"
            >
              <div className="hero-subtitle">
                <h1>Protien + Caffine</h1>
              </div>
            </div>
          </div>
          <h2 className="hero-description ">
            Live life to the fullest  with SPYLT: Shatter boredom and embrace
            your inner kid with every deliciously smooth chug.
          </h2>

          <button className="hero-button">Chug the SPYLT</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
