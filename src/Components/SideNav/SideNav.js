import React from "react";
import { useNavigate } from "react-router";
import { SideNavSty } from "../Styled/SideNavSty";
export default function SideNav() {

  const navigate = useNavigate()


  return (
    <SideNavSty>
      <div className="navCont">
        <div className="logo">
            <img src="https://cdn-icons-png.flaticon.com/64/1163/1163661.png" alt="logo" />
            <h3>Weather</h3>
        </div>
        <div className="navLinks">
            <ul>
                <li id="dashboard" onClick={()=>{
                  navigate("/")
                }}><span id="icon"><i class="fa-solid fa-house"></i></span> Dashboard</li>
                <li id="map" onClick={()=>{
                  navigate("/map")
                }}><span id="icon"><i class="fa-solid fa-map"></i></span> Map</li>
                <li  onClick={()=>{
                  
                  navigate("/savelocation")
                }}><span id="icon"><i class="fa-solid fa-location-dot"></i></span> Saved Location</li>
                {/* <li><span id="icon"><i class="fa-solid fa-calendar-days"></i></span> Calender</li> */}
            </ul>
        </div>
        {/* <div className="accounts">
            <ul>
                <li><span id="icon"><i class="fa-solid fa-gear"></i></span> Settings</li>
                <li><span id="icon"><i class="fa-solid fa-arrow-right-from-bracket"></i></span> Logout</li>
            </ul>
        </div> */}
        <div></div>
      </div>
    </SideNavSty>
  );
}
