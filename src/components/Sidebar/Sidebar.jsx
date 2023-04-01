import React from "react";
import Titlebar from "../Titlebar/Titlebar";

const Sidebar = (props) => {
  //   const { title, reading_time } = props.bookedmark;
  console.log(props);
  const items = props.bookedmark;

  return (
    <div className="card my-3 p-3 border-0">
      <div className="headeing">
        <h2>Spent time on read : min</h2>
      </div>
      <div className="card-body p-3 " style={{ backgroundColor: "#dee2e6" }}>
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
