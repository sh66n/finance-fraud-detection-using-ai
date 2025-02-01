'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: '🏦',
    title: 'Link a bank account.',
    description:
      'Eligible applicants can leverage their bank data quickly and securely ',
  },
  {
    icon: '⚪',
    title: 'Show off financial history.',
    description:
      'Petal can look beyond just a credit score and consider responsible ',
  },
  {
    icon: '🔓',
    title: 'Unlock the best offer available.',
    description:
      'With bank data, the best possible offer can be extended, even to those .',
  },
  {
    icon: '🏦',
    title: 'Link a bank account.',
    description:
      'Eligible applicants can leverage their bank data quickly and securely during .',
  },
  {
    icon: '⚪',
    title: 'Show off financial history.',
    description:
      'Petal can look beyond just a credit score and consider responsible spending .',
  },
  {
    icon: '🔓',
    title: 'Unlock the best offer available.',
    description:
      'With bank data, the best possible offer can be extended, even to those who would.',
  },
];

const BoostCardApproval = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    const width = slider.scrollWidth;
    const duration = width / 200; // Adjust the divisor for faster speed

    // Infinite horizontal scrolling animation
    const tl = gsap.timeline({ repeat: -1 });
    tl.to(slider, {
      x: `-40%`,
      duration,
      ease: 'linear',
    }).to(slider, { x: '0', duration: 0 });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section className="py-12  overflow-hidden w-full">
         <div className="w-full Bebas justify-center items-center pr-[3rem] py-[1rem] flex-col flex  ">
                  <div className=" textForCESA2">
                    <h2
                      // ref={cesaRef}
                      className="text-[0.8rem]  md:text-[1.2rem] lg:text-[3rem] xl:text-[6rem]"
                    >
                     ACHIVEMENT
                    </h2>
                  </div>
               
                
                </div>
      <div
        className="flex gap-6 px-6 lg:px-[6rem] w-full whitespace-nowrap"
        ref={sliderRef}
      >
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white border-[1px] border-gray-300 rounded-[1.5rem] w-[100%] h-[330px] flex flex-col items-center justify-center p-6 text-center shadow-md hover:shadow-lg transition duration-300"
          >
            <div className="text-[3rem]  mb-4">{feature.icon}</div>
            <h3 className="text-[1.4rem] font-bold text-gray-800 mb-3">
              {feature.title}
            </h3>
            <div className="w-[100%] flex justify-center items-center">
              <p className="text-gray-600 text-[1rem]">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BoostCardApproval;
