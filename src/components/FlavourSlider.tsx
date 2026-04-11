import React, { useRef } from 'react'
import { flavorlists } from '../constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
const FlavourSlider = () => {

  const sliderRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const scrollAmount = (sliderRef.current?.scrollWidth ?? 0) - window.innerWidth;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.flavor-section',
        start: '2% top',
        end: `+=${scrollAmount+1200}px`,
        scrub: true,
        markers: true,
        pin: true,
      }
    })

    tl.to('.flavor-section', {
      x: `-${scrollAmount+1200}px`,
      ease: "power1.inOut"
    })
  })
  return (
    <div ref={sliderRef} className='slider-wrapper'>
      <div className="flavors">
        {
          flavorlists.map((flavour, ind) => (
            <div key={ind} className={`relative lg:w-[50vw] z-30 w-96 lg:h-[70vh] md:w-[90vw] md:h-[50vh] h-80 flex-none ${flavour.rotation}`}>
              <img src={`/images/${flavour.color}-bg.svg`} alt="" />
              <img src={`/images/${flavour.color}-drink.webp`} className='drinks' alt="" />
              <img src={`/images/${flavour.color}-elements.webp`} className='elements' alt="" />
              <h1>{flavour.name}</h1>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default FlavourSlider