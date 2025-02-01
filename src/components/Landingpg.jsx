"use client";

import oneIMG from "../Assets/IMG/1.png";
import twoIMG from "../Assets/IMG/2.png";
import threeIMG from "../Assets/IMG/3.png";
import fourIMG from "../Assets/IMG/4.png";
import fiveIMG from "../Assets/IMG/7.png";
import React, { useRef, useEffect, useState } from "react";

import  GlobeAnimation from "../components/GlobalThree"

export default function Landing() {
 
  const heroRef = useRef(null);
  const videoRef = useRef(null);


  



  return (
    <div className="w-full flex flex-col " ref={heroRef}>
      <div className="HomePage ">
          < GlobeAnimation />
               

       
      </div>

      <div className="slider  ">
        <div className="slide-track z-4">
          <div className="slide z-4">
            <img src={oneIMG} height="100" width="250" alt="" />
          </div>
          <div className="slide">
            <img src={twoIMG} height="100" width="250" alt="" />
          </div>
          <div className="slide">
            <img src={threeIMG} height="100" width="250" alt="" />
          </div>
          <div className="slide">
            <img src={fourIMG} height="100" width="250" alt="" />
          </div>
          <div className="slide">
            <img src={fiveIMG} height="100" width="250" alt="" />
          </div>
          <div className="slide">
            <img src={threeIMG} height="100" width="250" alt="" />
          </div>
          <div className="slide">
            <img src={fiveIMG} height="100" width="250" alt="" />
          </div>
          <div className="slide">
            <img src={oneIMG} height="100" width="250" alt="" />
          </div>
          <div className="slide">
            <img src={fourIMG} height="100" width="250" alt="" />
          </div>
          <div className="slide">
            <img src={oneIMG} height="100" width="250" alt="" />
          </div>
          <div className="slide">
            <img src={twoIMG} height="100" width="250" alt="" />
          </div>
          <div className="slide">
            <img src={oneIMG} height="100" width="250" alt="" />
          </div>
          <div className="slide">
            <img src={fiveIMG} height="100" width="250" alt="" />
          </div>
          <div className="slide">
            <img src={fourIMG} height="100" width="250" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
