
import React, { useEffect, useRef } from 'react';
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import SplitType from 'split-type';
import gsap from 'gsap';


// Register the necessary Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const APIChart = () => {


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


  // Sales Data for Chart
  const salesData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Sales 2022",
        data: [1200, 1900, 3000, 2500, 2800, 3500, 4100, 4300, 2000, 3000, 3900, 4500],
        fill: true,
        backgroundColor: "rgba(75, 29, 130, 0.2)", // Indigo fill for the chart with transparency
        borderColor: "#4B1D82", // Indigo border color
        borderWidth: 2, // Add a border width to make the line visible
        tension: 0.4, // Smooth curve
        hoverBackgroundColor: "rgba(75, 29, 130, 0.5)", // Darker indigo when hovered
        hoverBorderColor: "#4B1D82", // Keep the same border color when hovered
        hoverBorderWidth: 3, // Make the border thicker on hover
      },
    ],
  };

  // Chart Options
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false, // Allow manual height adjustments
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `${tooltipItem.raw} sales`, // Format tooltip to show sales
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Hide grid lines on x-axis
        },
      },
      y: {
        ticks: {
          callback: (value) => `$${value / 1000}k`, // Format y-axis ticks to show sales in thousands (e.g., $1k)
        },
      },
    },
  };

  return (
    <div className="flex pt-[5rem] md:pt-[0rem] flex-col w-full h-auto">
      <div className="w-full flex ">
      <div className="w-full oswarld justify-center items-center md:pb-[2rem] md:pr-[5rem] flex-col flex  ">
                  <div className=" textForCESA1">
                    <h2
                      ref={titleRef}
                      className="text-[0.8rem]  md:text-[1.2rem]  lg:text-[3rem] xl:text-[6rem]"
                    >
                      STUDENT CHART 
                    </h2>
                  </div>
               
                
                </div>
      </div>
      <div  ref={imageRef} className="w-full flex  justify-center items-center">
      <div className="p-6 rounded-xl bg-[#000000] shadow-lg w-[90%] flex flex-col justify-start mb-6">
        <h3 className="text-white text-lg font-bold mb-4">Sales 2022</h3>
        <div className="text-white gap-5 text-sm mb-4 flex flex-col lg:flex-row justify-between p-5">
          <div>
          <p>
            <span className="text-[3rem] font-bold">$12.7k</span>{" "}
            <span className="text-green-500">+1.3%</span> vs last year
          </p>
          </div>
      
          <div className="flex justify-between md:gap-5 bg-[#fafaf8] lg:px-[3rem] lg:py-[0.7rem] px-[2rem] py-[1.2rem] rounded-[1rem]">
            <button className="px-3 py-1 rounded-md text-black text-sm">Daily</button>
            <button className="px-3 py-1 rounded-md text-black text-sm">Weekly</button>
            <button className="px-3 py-3 bg-[#070757] text-white rounded-[1rem] text-sm">Annually</button>
          </div>
        </div>
        {/* Chart with Reduced Height */}
        <div className="py-5" style={{ height: "650px" }}> {/* Adjust height here */}
          <Line data={salesData} options={chartOptions} />
        </div>
      </div>
</div>
    </div>
  );
};

export default APIChart;
