import React, { Component } from "react";
const NavBar = () => {
  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span className="badge badge-pill badge-secondary"></span>
          <div className="flex flex-row">
            <span>Welcome to eventful!</span>
            <button className="m-3 border-b border-gray-400 ">Form</button>
            <button className="m-3 border-b border-gray-400">All Forms</button>
            <button className=" m-3 border-b border-gray-400">Flash</button>
          </div>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
