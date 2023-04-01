import React from "react";

const Titlebar = (props) => {
  const { title } = props.item;
  return (
    <div className="rounded p-3 bg-white border my-4">
      <h2>{title}</h2>
    </div>
  );
};

export default Titlebar;
