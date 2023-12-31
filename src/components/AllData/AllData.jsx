import React from "react";
import "./Alldata.css";

const AllData = (props) => {
  const { url, author_img, author_name, date, reading_time, title, stage } =
    props.data;

  const dataHnadaler = props.dataHnadaler;
  const timeHandeler = props.timeHandeler;
  return (
    <div className="card my-3 p-3">
      <img src={url} alt={author_name} className="rounded" />
      <div className="d-flex justify-content-between align-items-center pt-3">
        <div className="d-flex align-items-center">
          <img src={author_img} alt={author_name} className="rounded w-25" />
          <div>
            <h2>{author_name}</h2>
            <p className="text-secondary">{date}</p>
          </div>
        </div>
        <h5 className="text-secondary">
          {reading_time} min read{" "}
          <i
            className="fa-regular fa-bookmark"
            onClick={() => dataHnadaler(props.data)}
          ></i>
        </h5>
      </div>
      <div className="p-2">
        <h1 className="py-2">{title}</h1>
        <p className="text-secondary">
          {stage.level} {stage.lang}
        </p>
      </div>
      <p href="" className="design" onClick={() => timeHandeler(props.data)}>
        Mark as read
      </p>
    </div>
  );
};

export default AllData;
