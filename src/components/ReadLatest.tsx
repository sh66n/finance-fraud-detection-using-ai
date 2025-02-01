'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const articles = [
  {
    image: 'https://via.placeholder.com/150',
    title: "Highnote is Now Certified on Visa’s Newest Fleet Payment Solution:",
    logo1: 'https://via.placeholder.com/40',
    logo2: 'https://via.placeholder.com/40',
  },
  {
    image: 'https://via.placeholder.com/150',
    title: "Speedchain Selects Highnote to Usher in a New Era in B2B Payments",
    logo1: 'https://via.placeholder.com/40',
    logo2: 'https://via.placeholder.com/40',
  },
  {
    image: 'https://via.placeholder.com/150',
    title:
      "Our Foray into Prepaid Card Issuance With Africa’s Fastest Growing Consumer ",
    logo1: 'https://via.placeholder.com/40',
    logo2: 'https://via.placeholder.com/40',
  },
  {
    image: 'https://via.placeholder.com/150',
    title: "Highnote is Now Certified on Visa’s Newest Fleet Payment Solution: Visa 2.0",
    logo1: 'https://via.placeholder.com/40',
    logo2: 'https://via.placeholder.com/40',
  },
  {
    image: 'https://via.placeholder.com/150',
    title: "Speedchain Selects Highnote to Usher in a New Era in B2B Payments",
    logo1: 'https://via.placeholder.com/40',
    logo2: 'https://via.placeholder.com/40',
  },
  {
    image: 'https://via.placeholder.com/150',
    title:
      "Our Foray into Prepaid Card Issuance With Africa’s Fastest Growing Consumer ",
    logo1: 'https://via.placeholder.com/40',
    logo2: 'https://via.placeholder.com/40',
  },
];

const ReadTheLatest = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    const sliderWidth = slider.scrollWidth;

    // GSAP timeline for left-to-right sliding effect
    const tl = gsap.timeline({ repeat: -1 });
    tl.fromTo(
      slider,
      { x: `-40%` }, // Start position
      {
        x: '0px', // End position
        duration: sliderWidth / 100, // Adjust duration based on content width
        ease: 'linear',
      }
    );

    return () => {
      tl.kill(); // Cleanup on unmount
    };
  }, []);

  return (
    <section className="py-6  overflow-hidden">
   <div className="w-full Bebas justify-center items-center pr-[3rem] py-[1rem] flex-col flex  ">
                  <div className=" textForCESA2">
                    <h2
                      // ref={cesaRef}
                      className="text-[0.8rem]  md:text-[1.2rem] lg:text-[3rem] xl:text-[6rem]"
                    >
                      READ THE LATEST
                    </h2>
                  </div>
               
                
                </div>      <div className="relative w-full flex overflow-hidden">
        <div
          className="flex gap-6 px-[3rem] lg:px-[7rem] py-[2rem] whitespace-nowrap"
          ref={sliderRef}
        >
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-white flex flex-col rounded-[1rem] w-[100%] h-[100%] p-4 shadow-md hover:shadow-xl border-[1px] border-gray-200 transition duration-300"
            >
              <div className="flex justify-center h-[200px]">
                <img
                  src={article.image}
                  alt="Featured"
                  className="rounded-md object-cover w-full h-full"
                />
              </div>
              <div className="flex justify-center space-x-4 my-3">
                <img src={article.logo1} alt="Logo 1" className="w-10 h-10 rounded-full object-cover" />
                <img src={article.logo2} alt="Logo 2" className="w-10 h-10 rounded-full object-cover" />
              </div>
              <p className="text-gray-700 text-center text-sm font-medium">{article.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReadTheLatest;
