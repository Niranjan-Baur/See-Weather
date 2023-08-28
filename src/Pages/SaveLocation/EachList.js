import React, { useEffect, useState } from "react";
import "./EachList.css";

export default function EachList(props) {
  // const [data,setData] = useState(localStorage.getItem("details") || "[]")

  // let x = JSON.parse(data)

  // setData(x);


  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem("details");
    if (savedData) {
      return JSON.parse(savedData);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("details", JSON.stringify(data));
  }, [data]);

  const onDelete = (city) => {
    const deletedData = data.filter((f) =>{ 
      return f.cityName !== city;
    })
    console.log(deletedData)
    setData(deletedData)
    localStorage.setItem("details",deletedData)
  } 

  return (
    <>
      <div className="eachListCont">
        <div className="tempAndCity">
          <div id="temp">{props.temp}° C</div>
          <div id="city">{props.city} <span id="country">({props.country})</span></div>
        </div>

        <div id="date_and_time">{props.time}</div>
        <div id="delBtn">
          <button id="delBtn"
            onClick={() =>{
               onDelete(props.city)
                // console.log(props.city)
              }}
          >Delete</button>
        </div>
      </div>
    </>
  );
}
