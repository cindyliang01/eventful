import React, { Component } from "react";
const NavBar = () => {
  return (
    // <nav>
    // <a href="/">Site Name</a>
    // <ul>
    //   <li>
    //     <a href="/pricing">Pricing</a>
    //   </li>
    //   <li>
    //     <a href="/about">About</a>
    //   </li>
    // </ul>
    // </nav>

    <nav className="navbar bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span className="badge badge-pill badge-secondary"></span>
          <div className="flex flex-row">
            <ul>
              <a href="/Form" className="m-3 border-b border-gray-400 ">
                Form
              </a>

              <a href="/AllForms" className="m-3 border-b border-gray-400 ">
                All Forms
              </a>

              <a href="/FlashCard" className="m-3 border-b border-gray-400 ">
                FlashCard
              </a>
            </ul>

            {/* <span>Welcome to eventful!</span>
            <button className="m-3 border-b border-gray-400 ">Form</button>
            <button className="m-3 border-b border-gray-400">All Forms</button>
            <button className=" m-3 border-b border-gray-400">Flash</button> */}
          </div>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
