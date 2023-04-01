import React from "react";
import Titlebar from "../Titlebar/Titlebar";
import "./Sidebar.css";

const Sidebar = (props) => {
  const items = props.bookedmark;
  const timeee = props.timetotal;

  let totalTime = 0;
  for (let item of timeee) {
    totalTime = totalTime + item.reading_time;
  }

  return (
    <div className="card my-3 p-3 border-0 ">
      <div className="heading">
        <h2>Spent time on read :{totalTime} min </h2>
      </div>
      <div
        className="card-body p-3 sticky-top"
        style={{ backgroundColor: "#dee2e6" }}
      >
        <h3 className="mt-3">Booked Mark items: {props.bookedmark.length} </h3>
        <p>
          {items.map((item) => (
            <Titlebar item={item} key={item.id}></Titlebar>
          ))}
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
