import React, { Children, Component } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">
          <span className="badge badge-pill badge-secondary"></span>
          <div className="flex flex-row">
            <ul>
              <CustomLink to="/Form">Form</CustomLink>
              <CustomLink to="/AllForms">AllForms</CustomLink>
              <CustomLink to="/FlashCard">FlashCard</CustomLink>
            </ul>
          </div>
        </Link>
      </div>
    </nav>
  );
};

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props} className="m-3 border-b border-gray-400 ">
        {children}
      </Link>
    </li>
  );
}

export default NavBar;
