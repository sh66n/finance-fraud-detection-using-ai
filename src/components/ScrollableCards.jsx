import SplitType from 'split-type';
import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';


export default function Steps() {

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


  return (
    <div className="min-h-screen mt-12  gap-[5rem] p-5 lg:p-20 w-full flex justify-center items-center">
      <div className="w-[90%] flex justify-start items-start gap-6">
        <div className="w-[40rem] md:-[30rem]  xl:max-w-5xl hidden xl:flex md:flex xl:flex-col md:flex-col oswarld py-12 sticky top-0">
        <div ref={titleRef} className="w-full Bebas justify-start items-start  py-[1rem] flex-col flex  ">
                  <div className="PlayfairFont textForCESA2">
                    <h2
                      // ref={cesaRef}
                      className="text-[1.4rem]  md:text-[2rem] lg:text-[3rem] xl:text-[6rem]"
                    >
                     Easy
                    </h2>
                  </div>
                  <div className=" mt-[-3rem] textForCESA2">
                    <h2
                      // ref={cesaRef}
                      className="text-[0.8rem]  md:text-[1.2rem] lg:text-[3rem] xl:text-[6rem]"
                    >
                     STEP TO CONNECT
                    </h2>
                  </div>
               
                
                </div>
          <div className="w-[80%]">
            <p className="md:text-[1.5rem] text-[.8rem]  text-blue-800 mt-[-2rem]">
              Follow these three simple steps to access the benefits of AlinMuni and enhance your educational experience.
            </p>
          </div>
        </div>

        {/* Steps Section */}
        <div ref={imageRef} className="w-full md:w-[30%] flex flex-col justify-center items-center xl:max-w-5xl lg:w-[70%] mt-10">
          {/* Step 1 */}
          <div className="flex flex-col md:flex-row bg-blue-50 rounded-[3rem] p-6 mb-6 w-full md:w-[20rem] xl:h-[47vh] xl:w-[45rem] shadow-lg">
            <div className="mb-4 md:mb-0">
              <span className="inline-block bg-blue-300 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full mb-2">
                Step 1
              </span>
              <div className=" Bebas ">
                    <h2
                      // ref={cesaRef}
                      className="text-[0.8rem] text-blue-800 md:text-[1.2rem] lg:text-[3rem] xl:text-[3rem]"
                    >
                     CREATE YOUR STUDENT ACCOUNT
                    </h2>
                  </div>              <p className="text-gray-700">
                Register for an AlinMuni account to access a wealth of educational resources and tools tailored specifically for students.
              </p>
              <p className="text-gray-700 mt-2">
                Once registered, verify your account through the confirmation email sent to you, and gain full access to all features.
              </p>
              <button className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-full shadow-md hover:bg-blue-600 transition duration-300 ease-in-out">
                Get Started
              </button>
            </div>
            <div className="flex justify-center items-center md:ml-auto">
            
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col md:flex-row bg-blue-50 rounded-[3rem] p-6 mb-6 w-full md:w-[20rem] xl:h-[47vh] xl:w-[45rem] shadow-lg">
            <div className="mb-4 md:mb-0">
              <span className="inline-block bg-blue-300 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full mb-2">
                Step 2
              </span>
              <div className=" Bebas ">
                    <h2
                      // ref={cesaRef}
                      className="text-[0.8rem] text-blue-800 md:text-[1.2rem] lg:text-[3rem] xl:text-[3rem]"
                    >
                     CONNECT WITH FACULTY AND FRIENDS
                     </h2>
                  </div>                  <p className="text-gray-700">
                Link your AlinMuni account to your college community to collaborate easily with peers and communicate with faculty members.
              </p>
              <p className="text-gray-700 mt-2">
                Engage in discussions, join study groups, and stay updated on important announcements through our platform.
              </p>
              <button className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-full shadow-md hover:bg-blue-600 transition duration-300 ease-in-out">
                Connect Now
              </button>
            </div>
            <div className="flex justify-center items-center md:ml-auto">
              
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col md:flex-row bg-blue-50 rounded-[3rem] p-6 mb-6 w-full md:w-[20rem] xl:h-[47vh] xl:w-[45rem] shadow-lg">
            <div className="mb-4 md:mb-0">
              <span className="inline-block bg-blue-300 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full mb-2">
                Step 3
              </span>
              <div className=" Bebas ">
                    <h2
                      // ref={cesaRef}
                      className="text-[0.8rem] text-blue-800 md:text-[1.2rem] lg:text-[3rem] xl:text-[3rem]"
                    >
                     VIEW YOUR SCORE IN LEADERBOARD
                    </h2>
                  </div>                  <p className="text-gray-700">
                Experience a tailored educational journey with resources that align with your academic goals, including study materials, course updates, and mentorship opportunities.
              </p>
              <p className="text-gray-700 mt-2">
                Get ready to leverage tools designed specifically for your success as a student, ensuring you make the most of your educational experience.
              </p>
              <button className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-full shadow-md hover:bg-blue-600 transition duration-300 ease-in-out">
                Access Resources
              </button>
            </div>
            <div className="flex justify-center items-center md:ml-auto">
           
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
