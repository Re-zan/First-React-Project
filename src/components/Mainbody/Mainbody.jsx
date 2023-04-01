import React, { useEffect, useState } from "react";
import AllData from "../AllData/AllData";
import Sidebar from "../Sidebar/Sidebar";

const Mainbody = () => {
  const [datas, setDatas] = useState([]);
  const [bookedmark, setBookedmark] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);

  const dataHnadaler = (data) => {
    const newItems = [...bookedmark, data];
    setBookedmark(newItems);
  };
  return (
    <div>
      <div className="row">
        <div className="col-sm-6 col-md-8">
          {datas.map((data) => (
            <AllData
              key={data.id}
              data={data}
              dataHnadaler={dataHnadaler}
            ></AllData>
          ))}
        </div>
        <div className="col-sm-6 col-md-4">
          <Sidebar bookedmark={bookedmark}></Sidebar>
        </div>
      </div>
    </div>
  );
};

export default Mainbody;
