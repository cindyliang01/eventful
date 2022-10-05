import React, { Children, Component } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
const NavBar = () => {
  return (
    // <nav className="navbar bg-light">
    //   <div className="container-fluid">
    //     <Link className="navbar-brand" to="#">
    //       <span className="badge badge-pill badge-secondary"></span>
    //       <div className="flex flex-row">
    //         <ul>
    //           <CustomLink to="/Form">Form</CustomLink>
    //           <CustomLink to="/AllForms">AllForms</CustomLink>
    //           <CustomLink to="/FlashCard">FlashCard</CustomLink>
    //         </ul>
    //       </div>
    //     </Link>
    //   </div>
    // </nav>

    <nav className="relative container p-6">
      <div className="flex items-cente justify-between">
        <h4 className="text-gray-500">Welcome to eventful!</h4>
        <div className="flex space-x-6">
          <CustomLink to="/Form" className="hover:text-pink-400 text-gray-500">
            Form
          </CustomLink>
          <CustomLink
            to="/AllForms "
            className="hover:text-pink-400 text-gray-500"
          >
            All Forms
          </CustomLink>
          <CustomLink
            to="/FlashCard"
            className="hover:text-pink-400 text-gray-500"
          >
            FlashCard
          </CustomLink>
        </div>
      </div>
    </nav>
  );
};

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname });
  return (
    <ul className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </ul>
  );
}

export default NavBar;
