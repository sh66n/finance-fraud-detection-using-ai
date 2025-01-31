"use client";
import abbas from "../../../Assets/IMG/person.png";
import Image from "next/image";
import { useState, useEffect } from "react";
import { CircularProgress,LinearProgress ,Box, Typography } from '@mui/material';
import EditBox from "@/components/EditBox"
import axios from 'axios';
import { useSession } from "next-auth/react";
import OnScrollAnimation from "@/components/OnScrollAnimmation";
import StudentProgressChart from "@/components/charts"
import ProfileWithCharts from "@/components/CircularGraph"
import Bubble from "@/components/Bubble"
import HeatMap from "@/components/HeatMap"

import toast, { Toaster } from 'react-hot-toast';



export default function StudentHome() {
    const { data: session, status } = useSession();
    const [progresses, setProgresses] = useState({});
    const [events, setEvents] = useState([]);
    const [studentDatas, setStudentDatas] = useState([]);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [data, setData] = useState([]);
    const [data2, setData2] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loading2, setLoading2] = useState(true);


    const [loadingImage, setLoadingImage] = useState(true); // Track loading state for image

    const [studentData, setStudentData] = useState({
        name: "Your Name",
        vid: "Your VID",
        class: "Your Class",
        batch: "Your Batch",
        div: "Your Division",
        sem: "Your Sem",
        image: abbas, // Default image
        year: "Current Year"
    });

   


const [error, setError] = useState(null);

const fetchStudentData = async () => {
    if (status === "authenticated" && session && session.user) {
        const userID = session.user.id;
        const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

        try {
            setLoading(true); 
            const response = await axios.get(`https://cesa-csi-pvppcoe.vercel.app/api/student?userId=${userID}`, {
                headers: {
                    Authorization: `${API_KEY}`,
                    "Content-Type": "application/json",
                },
            });

            if (response.status === 200) {
                setStudentData(response.data);
            } else {
                setError("No data found.");
            }
        } catch (error) {
            console.error("Error fetching student details:", error);
            setError("An error occurred while fetching student details.");
        } finally {
            setLoading(false); 
        }
    }
};
const handleEditClick = () => {
    setIsDialogOpen(true);
};

const handleSave = () => {
    fetchStudentData();
};

const fetchData = async () => {
    if (status === "authenticated" && session && session.user) {
      const userID = session.user.id;
      const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

      try {
        setLoading(true); 
        const response = await axios.get(`https://cesa-csi-pvppcoe.vercel.app/api/studentevent?userId=${userID}`, {
          headers: {
            'Authorization': API_KEY, 
          },
        });

        setData(response.data); // assuming response.data contains the data
        console.log(response.data); // For debugging purposes
      } catch (err) {
        setError(err.message); // Set error state if the API call fails
      } finally {
        setLoading(false); // Set loading to false once the request is complete
      }
    }
  };

  const fetchData2 = async () => {
    if (status === "authenticated" && session && session.user) {
      const userID = session.user.id;
      const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

      try {
        setLoading2(true); // Set loading to true before fetching (separate state)
        const response = await axios.get(`https://cesa-csi-pvppcoe.vercel.app/api/studentprojects?userId=${userID}`, {
          headers: {
            'Authorization': API_KEY, // Pass API key in Authorization header
          },
        });

        setData2(response.data); // assuming response.data contains the data
        console.log(response.data); // For debugging purposes
      } catch (err) {
        setError(err.message); // Set error state if the API call fails
      } finally {
        setLoading2(false); // Set loading to false once the request is complete
      }
    }
  };

  useEffect(() => {
    if (status === "authenticated" && session) {
      // Trigger data fetching when session is authenticated
      fetchStudentData()
      fetchData();
      fetchData2();
    }

    // Simulating fetching events data with demo values
    const demoEvents = [
      { eventId: 4, name: "Project D", progress: 50 },
    ];
    setEvents(demoEvents);

    // Set initial demo progress values
    const initialProgress = {};
    demoEvents.forEach(event => {
      initialProgress[event.eventId] = event.progress;
    });
    setProgresses(initialProgress);

    // Animate elements on scroll
    if (typeof document !== "undefined") {
      const hiddenElements1 = document.querySelectorAll(".hidden3");
      const hiddenElements2 = document.querySelectorAll(".hidden2");
      const hiddenElements3 = document.querySelectorAll(".hidden1");
      const hiddenElements4 = document.querySelectorAll(".hidden4");

      OnScrollAnimation(hiddenElements1);
      OnScrollAnimation(hiddenElements2);
      OnScrollAnimation(hiddenElements3);
      OnScrollAnimation(hiddenElements4);
    }
  }, [session, status]);
const handleDialogClose = () => {
    setIsDialogOpen(false);
};

    return (
        <div className="  xl:h-[100%] flex flex-wrap gap-5 xl:p-6 p-2 bg-opacity-10 backdrop-blur-md bg-white hover:bg-opacity-20  ">
            <EditBox 
                isOpen={isDialogOpen} 
                onClose={handleDialogClose} 
                studentData={studentData} 
                onSave={handleSave} 
            />
            <div className="w-full xl:w-full flex-col xl:flex-row h-[50%] flex gap-3">
            <div className="lg:w-[30%] w-[100%] rounded-xl bg-opacity-10 backdrop-blur-md border border-gray-200 bg-slate-50 ease-in-out relative">
            <div className="w-full flex flex-col items-center justify-center py-6">
                   {loading && (
                        <div className="flex justify-center items-center h-[20rem]">
                            <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-[100%] w-20"></div>
                        </div>
                    )}
                    <Image 
                        src={studentData.image || abbas} 
                        width={288} 
                        height={288} 
                        className={`w-[18rem] h-[18rem] rounded-full ${loading ? 'hidden' : ''}`} 
                        alt="Student Image" 
                       
                    />
                    <button 
                        className="absolute top-2 right-2 bg-blue-500 text-white py-1 px-2 rounded-lg shadow-md hover:bg-blue-600"
                        onClick={handleEditClick}
                    >
                        Edit
                </button> 
            </div>

            </div>

            <div className=" xl:w-[70%] w-[100%] flex-col lg:flex-row flex justify-between rounded-xl bg-opacity-10 backdrop-blur-md border border-gray-300 bg-white p-4 relative">
                <div clasName="w-[50rem]">
                <h3 className="text-gray-800 text-[1.5rem] font-semibold">Your Profile</h3>
                <button 
                    className="absolute top-2 right-2 bg-blue-500 text-white py-1 px-2 rounded-lg shadow-md hover:bg-blue-600"
                    onClick={handleEditClick}
                >
                    Edit
                </button>
                <div className="w-full flex justify-start items-center h-[60%] gap-20 mt-6">
                <div className="w-full flex justify-evenly">
            {loading ? (
                <div className="flex w-[20rem] justify-center items-center h-48">
                    <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-20 w-20"></div>
                </div>
            ) : (
                <div className="w-[100%]">
                    <div className="flex items-center mt-2">
                        <h3 className="text-gray-600 text-[1.3rem]">NAME:</h3>
                        <p className="ml-2 text-[1.3rem]">{studentData.name}</p>
                    </div>
                    <div className="flex items-center mt-2">
                        <h3 className="text-gray-600 text-[1.3rem]">VID:</h3>
                        <p className="ml-2 text-[1.3rem]">{studentData.vid}</p>
                    </div>
                    <div className="flex items-center mt-2">
                        <h3 className="text-gray-600 text-[1.3rem]">CLASS:</h3>
                        <p className="ml-2 text-[1.3rem]">{studentData.class}</p>
                    </div>
                    <div className="flex items-center mt-2">
                        <h3 className="text-gray-600 text-[1.3rem]">BATCH:</h3>
                        <p className="ml-2 text-[1.3rem]">{studentData.batch}</p>
                    </div>
                    <div className="flex items-center mt-2">
                        <h3 className="text-gray-600 text-[1.3rem]">DIV:</h3>
                        <p className="ml-2 text-[1.3rem]">{studentData.div}</p>
                    </div>
                    <div className="flex items-center mt-2">
                        <h3 className="text-gray-600 text-[1.3rem]">SEM:</h3>
                        <p className="ml-2 text-[1.3rem]">{studentData.sem}</p>
                    </div>
                </div>
            )}
        </div>
        </div>
        </div>
                    <div className="xl:w-[65%] lg:w-[60%] w-[100%] flex items-center justify-center "><ProfileWithCharts studentData={studentData} handleEditClick={handleEditClick} /> </div>
                   

            </div>


            </div>
            <div className="w-full h-[300%] xl:h-[200%] flex  flex-col xl:flex-row gap-3">
                <div className="w-full h-full flex flex-col gap-5">
                <div className="w-[100%] h-full items-center justify-center flex rounded-xl bg-opacity-10 backdrop-blur-md border border-gray-300 bg-white  ease-in-out p-4">
                <div className="flex flex-col items-center justify-center rounded-xl w-[100%] h-auto">
    <StudentProgressChart />
</div>


              
             </div>
             <div className="w-[100%] h-full items-center justify-center flex rounded-xl bg-opacity-10 backdrop-blur-md border border-gray-300 bg-white  ease-in-out p-4">
                <div className="flex flex-col items-center justify-center rounded-xl w-[100%] h-auto">
    <Bubble />
</div>


              
             </div>


             <div className="w-[100%] h-full items-center justify-center flex rounded-xl bg-opacity-10 backdrop-blur-md border border-gray-300 bg-white  ease-in-out p-4">
                <div className="flex flex-col items-center justify-center rounded-xl w-[100%] h-auto">
    <HeatMap />
</div>


              
             </div>
               


               





                    
           
                </div>
                
            </div>

           
        </div>
   
    );
}
