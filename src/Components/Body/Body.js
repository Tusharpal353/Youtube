/* import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Recommendations from "../Recommendations/Recommendations";
import { VIDEO_URL } from "../../Utils/Constant";
import VideoCard from "../VideoCard/VideoCard";
import VideoContainer from "../VidoeContainer/VideoContainer";
import { Outlet } from "react-router-dom";
const Body = ({}) => {
  return (
    <div className=" ">
      <div className="flex ">
        <Sidebar />
        <div className="flex-1 ml-64 flex-col">
    
          <Outlet/>
        </div>
      </div>
    </div>
  );
};

export default Body;
 */
import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { useSelector } from "react-redux"; // For accessing BarOpen state
import { Outlet } from "react-router-dom";

const Body = () => {
  const BarOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <div className="flex pt-14">
      {/* Sidebar */}
      {BarOpen && <Sidebar />}
      {/* Main Content */}
      <div
        className={`flex-1 ${
          BarOpen ? "ml-64" : "ml-0"
        } transition-all duration-300`}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
