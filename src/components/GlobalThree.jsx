import React, { useEffect, useRef } from "react";
import * as THREE from "three"; // Ensure THREE.js is imported
import VANTA from "vanta/dist/vanta.globe.min"; // Correct import for Globe effect

import gsap from "gsap";
import SplitType from "split-type";

const GlobeAnimation = () => {
  const vantaRef = useRef(null);
  const cesaRef = useRef(null);
  const andRef = useRef(null);
  const csiRef = useRef(null);
  const vppcoeRef = useRef(null);
  const headerTextRef = useRef(null);
  const infoRef = useRef(null);
  const infoRef2 = useRef(null);
  const showReelRef = useRef(null);
  const heroRef = useRef(null);

  // const {
  //   setCursorSettings,
  //   preloader, // Preloader state
  // } = useContextProvider();


  useEffect(() => {
    // VANTA Effect
    let vantaEffect;
    if (!vantaEffect) {
      vantaEffect = VANTA({
        el: vantaRef.current,
        THREE, // Pass THREE.js explicitly
        mouseControls: true,
        touchControls: true,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0xff5733, // Customize globe color
        backgroundColor: 0x000000, // Background color
      });
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy(); // Clean up effect on unmount
    };
  }, []);

  useEffect(() => {
    const headerTextSplit = SplitType.create(headerTextRef.current);
    const infoSplit = SplitType.create(infoRef.current);
    const infoSplit2 = SplitType.create(infoRef2.current);

    let mm = gsap.matchMedia();
    const homeTl = gsap.timeline();
    const elements = gsap.utils.toArray([infoSplit.lines, infoSplit2.lines]);

    mm.add("(min-width: 1080px)", () => {
      gsap.to(showReelRef.current, {
        scale: 1,
        ease: "none",
        scrollTrigger: {
          trigger: showReelRef.current,
          start: "top 50%",
          end: "bottom 10%",
          scrub: 0.1,
        },
      });

      gsap.to(heroRef.current, {
        backgroundColor: "#7d7d7d",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.3,
        },
      });
    });

    homeTl
      .set(headerTextSplit.chars, {
        yPercent: 100,
      })
      .set(elements, {
        y: 100,
        opacity: 0,
      })
      .set(showReelRef.current, {
        x: 150,
        opacity: 0,
      });

   
  }, []);

  

  useEffect(() => {
   
  }, []);


  return     <div style={{ position: "relative", height: "100vh", width: "100%" }}>

<div
        ref={vantaRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1, 
        }}
      ></div>
       <div className="overlay"></div>
              <div className="text">
                <div className="w-full oswarld TextContainer  flex xl:gap-[3rem] gap-[1rem] md:gap-[2rem]  ">
                  <div className=" textForCESA">
                    <h2
                      ref={cesaRef}
                      className="text-[0.8rem]  md:text-[1.2rem] lg:text-[3rem] xl:text-[6rem]"
                    >
                       
                    </h2>
                  </div>
                  <div className="textForCESA">
                    <h2
                      ref={andRef}
                      className="text-[0.8rem] md:text-[1.2rem] lg:text-[3rem] xl:text-[6rem]"
                    >
                      Fraud
                    </h2>
                  </div>
                  <div className="textForCESA">
                    <h2
                      ref={csiRef}
                      className="text-[0.8rem] md:text-[1.2rem] lg:text-[3rem] xl:text-[6rem]"
                    >
                      AI
                    </h2>
                  </div>
                </div>
      <div className="w-full flex justify-start items-start h-[40%] p-5 flex-col">
        <div className="xl:w-[30%] md:w-[40%]  w-full ">
                <h3
                  ref={vppcoeRef}
                  className="text-[0.6rem] "
                >
                 Fruad Detection
                </h3>
                <p
                  className="text-[05rem] PlayfairFont md:text-[0.8rem] lg:text-[1rem] xl:text-[1.1rem]"
                >
                  Transction Fruad Detection
                </p>
                <div>
                  <a href="/contact-us" className="">
                    Mission & Vision
                  </a>
                </div>
                </div>
                </div>
              </div>
</div>;
};

export default GlobeAnimation;
