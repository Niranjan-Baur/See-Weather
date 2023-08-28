import React from "react";
import EachList from "./EachList";
import "./SaveLocation.css";
import { v4 as uuid } from 'uuid';


export default function SaveLocation() {
  let data = localStorage?.getItem("details") || "[]";

  data = JSON?.parse(data);

  return (
    <div key={uuid()} className="listCont">
      {data.length > 0 ? data?.map((res) => {
        return <EachList id={uuid()} temp={res.temp}  city={res.cityName} country={res.countryName || "--"} time={res.dateAndTime}></EachList>;
      }) : <p>No Data Found</p>}
    </div>
  );
}
