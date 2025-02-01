'use client';

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SplitType from 'split-type';




const Conatiner = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 6rem;
  margin-top: 5rem;
  @media (max-width: 1024px) {
    margin: 0 3rem;
    margin-top: 3rem;
  }
  @media (max-width: 768px) {
    margin: 0 1rem;
    margin-top: 2rem;
  }
`;

const ContentWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 1024px) {
    width: 60%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Content = styled.div`
  width: 90%;
  height: 100svh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  img {
    display: none;
  }

  h1 {
    font-size: 4rem;
    font-weight: 500;
    text-transform: uppercase;
    font-weight: 600;
    padding-bottom: 1rem;
  }

  p {
    font-size: 1.1rem;
    font-weight: 400;
    padding-bottom: 1rem;
    line-height: 1.6;
  }

  .more_info {
    .info {
      display: flex;
      align-items: center;
      p {
        padding: 0;
        font-size: 1rem;
        padding-bottom: 0.7rem;
      }
      .service_add_info {
        padding-right: 0.5rem;
        font-weight: 600;
        min-width: fit-content;
      }
    }
  }

  @media (max-width: 1024px) {
    width: 100%;
    h1 {
      font-size: 3rem;
      padding-bottom: 0.8rem;
    }
    p {
      font-size: 1rem;
    }
    .more_info {
      .info {
        p {
          font-size: 0.9rem;
        }
      }
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    height: fit-content;
    margin-bottom: 3rem;
    &:last-child {
      margin-bottom: 0;
    }

    img {
      display: block;
      height: 40vh;
      object-fit: cover;
      border-radius: 2rem;
    }

    h1 {
      margin-top: 1.5rem;
      font-size: 1.7rem;
      padding-bottom: 0.5rem;
    }

    p {
      font-size: 0.9rem;
      line-height: 1.2;
    }

    .more_info {
      .info {
        display: block;
        p {
          padding-right: 0;
          &:last-child {
            padding-left: 0.6rem;
          }
        }
      }
    }
  }
`;

const RightContainer = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1024px) {
    width: 40%;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const ImageWrapper = styled.div`
  height: 70%;
  width: 80%;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2rem;
  overflow: hidden;

  @media (max-width: 1024px) {
    height: 60%;
    width: 70%;
  }
`;

const Image = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Button = styled(Link)`
  border: 1px solid #000000b5;
  padding: 0.8rem 1.5rem;
  width: max-content;
  background-color: white;
  border-radius: 2rem;

  @media (max-width: 1024px) {
    padding: 0.6rem 1.2rem;
  }

  @media (max-width: 768px) {
    margin-top: 1.5rem;
    padding: 0.5rem 1rem;
  }
`;


const servicesData = [
  {
    name: "CESA & CSI ",
    info: "At CESA & CSI, we are committed to fostering creativity and technological excellence by organizing events that inspire students and professionals alike. Our initiatives are designed to provide a platform for showcasing talent, collaborating on innovative projects, and building a community of future leaders.",
    image: "https://res.cloudinary.com/dtnotszn5/image/upload/v1736897803/events/screenshots/ikw6io8ihthawpriregz.jpg",
    backgroundColor: "#090f41",
    TextColor: "white",

    addInfo: [
      {
        name: "Project Competitions",
        info: "Encouraging innovation and problem-solving",
      },
      {
        name: "Hackathons",
        info: "A space for tech enthusiasts to ideate.",
      },
      {
        name: "Workshops & Seminars",
        info: "Opportunities to learn from industry",
      },
    ],
    btnText: "Learn More",
  },
  {
    name: "Project Competitions",
    info: "Transform your business with custom mobile applications designed by Clever Studio. We build intuitive, engaging apps for both iOS and Android platforms, enhancing user experience and driving customer engagement.",
    image: "https://res.cloudinary.com/dtnotszn5/image/upload/v1736920332/IMG_2516_cx5eyv.jpg",
    backgroundColor: "#d4f3b7",
    TextColor: "black",

    addInfo: [
      {
        name: "Innovative Challenges",
        info: "Competitions designed to push boundaries and encourage",
      },
      {
        name: "Real-World Applications",
        info: "Projects addressing practical problems with impactful outcomes.",
      },
      {
        name: "Expert Evaluation",
        info: "Judged by industry professionals and academic leaders.",
      },
    ],
    btnText: "Learn More",
  },
  {
    name: "Hackathons",
    info: "At CESA & CSI, we host thrilling hackathons that challenge participants to push their limits, solve real-world problems, and showcase their technical skills. Our hackathons are designed to inspire creativity, foster collaboration, and ignite a passion for innovation among tech enthusiasts.",
    image: "https://res.cloudinary.com/dtnotszn5/image/upload/v1736920333/IMG_6770_ifp1oh.jpg",
    backgroundColor: "#dfc5fe",
    addInfo: [
      {
        name: "Real-Time Problem Solving",
        info: "Tackle industry-relevant challenges under time constraints ",
      },
      {
        name: "Innovative Thinking",
        info: "Professional content for internal and external communications.",
      },
      {
        name: "Collaborative Spirit",
        info: "Engaging videos for platforms like Instagram, Facebook, and YouTube.",
      },
    ],
    btnText: "Transform",
  },
  {
    name: "Siminars",
    info: "At CESA & CSI, we organize insightful siminars to provide students, professionals, and innovators with valuable knowledge, industry insights, and hands-on experiences. These sessions feature experts from various fields who share their expertise, guide participants on emerging technologies, and inspire them to drive innovation forward.",
    image: "https://res.cloudinary.com/dtnotszn5/image/upload/v1736920333/IMG_20240729_102647_o3p1cs.jpg",
    backgroundColor: "#A0D9EF",
    TextColor: "black",

    addInfo: [
      {
        name: "Expert-Led Sessions",
        info: "Unique and tailored to your brand.",
      },
      {
        name: " Skill Development",
        info: "Cohesive designs that tell your story.",
      },
      {
        name: "Knowledge Sharing",
        info: "Ensuring you get the perfect design.",
      },
      {
        name: "High-Resolution Files",
        info: "For all your branding needs.",
      },
    ],
    btnText: "Get Your Custom Logo",
  },
  {
    name: "Innovation",
    info: "At CESA & CSI, we focus on creating meaningful experiences that go beyond ordinary learning and events. Whether it’s participating in hackathons, working on innovative projects, attending workshops, or collaborating with peers, every moment is designed to provide hands-on learning, personal growth, and lasting connections..",
    image: "https://res.cloudinary.com/dtnotszn5/image/upload/v1736920333/IMG_6776_wtdjpk.jpg",
    backgroundColor: "#FDFD96",
    addInfo: [
      {
        name: "Challenging Projects",
        info: "Engage in real-world challenges that push your limits,",
      },
      {
        name: "Community Management",
        info: "Engaging with your audience and building relationships.",
      },
      {
        name: "Strategy Development",
        info: "Tailored social media strategies for your brand.",
      },
    ],
    btnText: "Learn More",
  },
  {
    name: " Exciting Events",
    info: "At CESA & CSI, we organize a variety of dynamic events that bring together students, professionals, and industry leaders to collaborate, learn, and innovate. These events serve as a vibrant platform to showcase talent, foster creativity, and create meaningful connections across different domains..",
    image: "https://res.cloudinary.com/dtnotszn5/image/upload/v1736920332/IMG_6763_zwa0vh.jpg",
    backgroundColor: "#00042a",
    TextColor: "#FFFFFF",
    addInfo: [
      {
        name: "Studio Photography",
        info: "Perfect lighting and settings for professional results.",
      },
      {
        name: "Lifestyle Photography",
        info: "Showcasing products in real-life scenarios.",
      },
      {
        name: "High-Resolution Images",
        info: "Ready for print and digital use.",
      },
    ],
    btnText: "Learn More",
  },
];

const Services = () => {
    
	const imageRef = useRef([]);
	const titleRef = useRef(null);

	useEffect(() => {
		const splitTitle = SplitType.create(
			titleRef.current,
			{
				types: 'chars',
			}
		);

		gsap.set(splitTitle.chars, {
			opacity: 0,
			filter: 'blur(5px)',
			y: 100,
		});

		gsap.to(splitTitle.chars, {
			opacity: 1,
			y: 0,
			filter: 'blur(0px)',
			stagger: 0.02,
			duration: 0.6,
			delay: 0.3,
			scrollTrigger: {
				trigger: titleRef.current,
				start: 'top 80%',
				toggleActions: 'play none none reverse',
			},
		});

    if (imageRef.current) {
      gsap.set(imageRef.current, {
        filter: 'blur(10px)',
        scale: 1.1,
      });
    
      gsap.to(imageRef.current, {
        filter: 'blur(0px)',
        scale: 1,
        duration: 0.75,
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });
    }
    
	}, []);

  const containerRef = useRef(null);
  const imageWrapperRef = useRef(null);
  const contents = [];

  useGSAP(() => {
    let mm = gsap.matchMedia();
    const images = gsap.utils.toArray(".image:not(:first-child)");
    gsap.set(images, { clearProps: "all" });

    const body = document.body;
    mm.add("(min-width: 768px)", () => {
      gsap.set(images, { yPercent: 101 });

      const animation = gsap.to(images, {
        yPercent: 0,
        duration: 1,
        stagger: 1,
      });

      ScrollTrigger.create({

        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: imageWrapperRef.current,
        scrub: true,
        animation: animation,
      });
    });

    contents.forEach((element, index) => {
      ScrollTrigger.create({
        trigger: element,
        start: "top 30%",
        end: "bottom 30%",
        onEnter: () =>
          gsap.to(body, {
            backgroundColor: servicesData[index].backgroundColor,
            color: servicesData[index].TextColor,

          }),
        

        onLeave: () => {
          if (index === contents.length - 1) {
            gsap.to(body, {
              backgroundColor: "#00042a",
            });
          }
        },
        onLeaveBack: () => {
          if (index === 0) {
            gsap.to(body, {
              backgroundColor: "#00042a",
            });
          } else {
            gsap.to(Button, {
              backgroundColor: servicesData[index - 1].backgroundColor,
              color: servicesData[index - 1].TextColor,
            });
          }
        },
      });
    });
  });

  return (
    <Conatiner ref={containerRef} id="services">
     <ContentWrapper ref={imageRef}>
  {servicesData.map((item, index) => (
    <Content
      key={item.name}
      ref={(element) => (contents[index] = element)}
      style={{
        color: index === 0 ? 'white' : 'inherit', // White text for the first element
      }}
    >
      <img src={item.image} alt="" />
      <h1>{item.name}</h1>
      <p>{item.info}</p>
      <div className="more_info">
        {item.addInfo.map((item, index) => (
          <div className="info" key={item.name}>
            <p className="service_add_info">• {item.name}:</p>
            <p>{item.info}</p>
          </div>
        ))}
      </div>
      <Button to="/quote">{item.btnText}</Button>
    </Content>
  ))}
</ContentWrapper>

      <RightContainer>
        <ImageWrapper ref={imageWrapperRef}>
          {servicesData.map((item, index) => (
            <Image key={item.name} className="image">
              <img src={item.image} alt="" />
            </Image>
          ))}
        </ImageWrapper>
      </RightContainer>
    </Conatiner>
  );
};

export default Services;
