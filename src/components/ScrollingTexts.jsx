import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";

const MarqueeContainer = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  color: white;
  height: max-content;
  margin-top:2rem;
  margin-bottom: -1rem;

  @media (max-width: 768px) {
    height: 5rem;
    margin-bottom: 2.5rem;
  }
`;

const MarqueeContent = styled.div`
  display: flex;
  flex-direction: row; 
  white-space: nowrap;
  font-style:italic;
  font-size: 6rem;
  font-weight: 600;
  color: white;

  p {
    display: flex;
    margin-right: 2rem;

    span {
      display: flex;
      align-items: center;

      svg {
        width: 4rem;
        margin: 0 2rem;
      }
    }
  }

  @media (max-width: 1080px) {
    font-size: 3rem;

    p {
      color: white;

      span {
        svg {
          width: 2rem;
          margin: 0 1rem;
        }
      }
    }
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Marquee1 = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marqueeElement = marqueeRef.current;
    const contentWidth = marqueeElement.scrollWidth;
    const containerWidth = marqueeElement.offsetWidth;

    const duration = 7 * (contentWidth / containerWidth);

    // GSAP animation
    gsap.to(marqueeElement, {
      x: `-${contentWidth}px`,
      repeat: -1,
      ease: "linear",
      duration,
    });
  }, []);

  return (
    <MarqueeContainer>
      <MarqueeContent   ref={marqueeRef}>
        <p>
          MADE BY RIZVI AHMED ABBAS MADE BY RIZVI AHMED ABBAS
          <span>
            <SVG />
          </span>
          MADE BY RIZVI AHMED ABBAS MADE BY RIZVI AHMED ABBAS
        </p>
        <p>
          MADE BY RIZVI AHMED ABBAS MADE BY RIZVI AHMED ABBAS
          <span>
            <SVG />
          </span>
          MADE BY RIZVI AHMED ABBAS MADE BY RIZVI AHMED ABBAS
        </p>
      </MarqueeContent>
    </MarqueeContainer>
  );
};

export default Marquee1;

const SVG = () => {
  return (
    <span>
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M120 0H80V51.7157L43.4315 15.1472L15.1472 43.4314L51.7158 80H0V120H51.7157L15.1472 156.568L43.4315 184.853L80 148.284V200H120V148.284L156.569 184.853L184.853 156.569L148.284 120H200V80H148.284L184.853 43.4314L156.569 15.1471L120 51.7157V0Z"
          fill="white"
        />
      </svg>
    </span>
  );
};
