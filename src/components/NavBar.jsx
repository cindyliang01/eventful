import React, { Component } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
class NavBar extends Component {
  render() {
    return (
      <nav className="relative container px-6 pt-6 border-b">
        <div className="flex items-center justify-between">
          <h4 className="text-gray-500">Welcome to eventful!</h4>
          <div className="flex space-x-6">
            <CustomLink
              to="/Form"
              className="hover:text-pink-400 text-gray-500"
            >
              Form
            </CustomLink>
            <CustomLink
              to="/AllForms"
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
  }
}

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
