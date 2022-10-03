import React, { Children, Component } from "react";
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
              <CustomLink href="/Form">Form</CustomLink>
              <CustomLink href="/AllForms">AllForms</CustomLink>
              <CustomLink href="/FlashCard">FlashCard</CustomLink>
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

function CustomLink({ href, children, ...props }) {
  const path = window.location.pathname;
  return (
    <li className={path === href ? "active" : ""}>
      <a href={href} {...props} className="m-3 border-b border-gray-400 ">
        {children}
      </a>
    </li>
  );
}

export default NavBar;
