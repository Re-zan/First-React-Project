import React from "react";

const Header = () => {
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid ">
          <a className="navbar-brand">
            <h2 className="fs-2 text">Learn & Practice Cafe</h2>
          </a>
          <img
            src="https://avatars.dicebear.com/api/adventurer/Zannat.svg"
            alt="https://avatars.dicebear.com/api/adventurer/Zannat.svg"
            style={{ width: "90px" }}
          />
        </div>
      </nav>
      <hr></hr>
    </div>
  );
};

export default Header;
