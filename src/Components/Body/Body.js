/* 

WITHOUT SIDEBAR


import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { useSelector } from "react-redux"; // For accessing BarOpen state
import { Outlet } from "react-router-dom";

const Body = () => {
  const BarOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <div className="flex pt-14">
    
      {BarOpen && <Sidebar />}
   
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
 */


import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const Body = () => {
  const BarOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <div className="flex flex-col lg:flex-row pt-14">
      {/* Sidebar */}
      <Sidebar />
      {/* Main Content */}
      <div className={`flex-1 transition-all duration-300 ${BarOpen ? "lg:ml-64" : "lg:ml-0"}`}>
        <Outlet />
      </div>
    </div>
  );
};

export default Body;

