import React, { useEffect, useState } from "react";
import AllData from "../AllData/AllData";

const Mainbody = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);
  return (
    <div>
      <div className="row">
        <div className="col-sm-6 col-md-8">
          {datas.map((data) => (
            <AllData key={data.id} data={data}></AllData>
          ))}
        </div>
        <div className="col-sm-6 col-md-4">Column2</div>
      </div>
    </div>
  );
};

export default Mainbody;
