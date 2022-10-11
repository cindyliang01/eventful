import React, { Component } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
class NavBar extends Component {
  render() {
    const { setPageState } = this.props;
    return (
      <nav className="relative container px-6 pt-6 border-b">
        <div className="flex items-center justify-between">
          <h4 className="text-gray-500">Welcome to eventful!</h4>
          <div className="flex space-x-6">
            <CustomLink
              to="/Home"
              className="hover:text-pink-400 text-gray-500"
            >
              Home
            </CustomLink>
            <CustomLink
              to="/Form"
              className="hover:text-pink-400 text-gray-500"
              onClick={() => setPageState("form")}
            >
              Form
            </CustomLink>
            <CustomLink
              to="/AllForms"
              className="hover:text-pink-400 text-gray-500"
              onClick={() => setPageState("allForms")}
            >
              All Forms
            </CustomLink>
            <CustomLink
              to="/FlashCard"
              className="hover:text-pink-400 text-gray-500"
              onClick={() => setPageState("flashcard")}
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
  // const { setFlashBackState } = this.props;
  // if (to === "/FlashCard") {
  //   setFlashBackState();
  // }
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
