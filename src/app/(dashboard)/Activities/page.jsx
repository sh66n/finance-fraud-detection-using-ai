"use client";

import NavBar from "@/app/(dashBoard)/Pages/NavBar";
import Activities from "../Pages/Activities";
import HeaderDash from "@/app/(dashBoard)/Pages/HeaderDash";

export default function Home() {
  return (
    <div className="bg-white w-full h-[100vh] flex justify-center items-center ">
      <div className="w-[15%] flex justify-center">
        <NavBar />
      </div>
      
      <div className="w-[85%] h-[97vh] flex flex-col pr-8 ">
        <div className="h-[8vh]">
          <HeaderDash />
        </div>
        
        <div className="h-[100vh] w-full  overflow-auto pt-4">
          <Activities />
        </div>
      </div>
    </div>
  );
}
