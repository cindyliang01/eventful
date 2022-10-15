// import React, { Component } from "react";
// import { Link, useMatch, useResolvedPath } from "react-router-dom";
// class NavBar extends Component {
//   render() {
//     const { setPageState } = this.props;
//     return (
//       <nav className="px-6 pt-3 border-b relative container ">
//         <div className="flex items-center justify-between">
//           <h4 className="text-gray-500">Welcome to eventful!</h4>
//           <div className="flex space-x-6">
//             <CustomLink
//               to="/"
//               className="hover:text-pink-400 text-gray-500"
//               onClick={() => setPageState("home")}
//             >
//               Home
//             </CustomLink>
//             <CustomLink
//               to="/Form"
//               className="hover:text-pink-400 text-gray-500"
//               onClick={() => setPageState("form")}
//             >
//               Form
//             </CustomLink>
//             <CustomLink
//               to="/AllForms"
//               className="hover:text-pink-400 text-gray-500"
//               onClick={() => setPageState("allForms")}
//             >
//               All Forms
//             </CustomLink>
//             <CustomLink
//               to="/FlashCard"
//               className="hover:text-pink-400 text-gray-500"
//               onClick={() => setPageState("flashcard")}
//             >
//               FlashCard
//             </CustomLink>
//           </div>
//         </div>
//       </nav>
//     );
//   }
// }

// function CustomLink({ to, children, ...props }) {
//   const resolvedPath = useResolvedPath(to);
//   const isActive = useMatch({ path: resolvedPath.pathname });
//   return (
//     <ul className={isActive ? "active" : ""}>
//       <Link to={to} {...props}>
//         {children}
//       </Link>
//     </ul>
//   );
// }

// export default NavBar;

import React, { Component } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
class NavBar extends Component {
  render() {
    const { setPageState } = this.props;
    return (
      <nav className="px-6 pt-3 border-b relative container ">
        <div className="flex flex-row">
          <CustomLink
            to=""
            className="hover:text-pink-400 text-gray-500"
            onClick={() => setPageState("home")}
          >
            <h5 className="text-gray-500">Welcome to eventful!</h5>
          </CustomLink>
          <div className="flex flex-grow"></div>
          <div className="flex space-x-6">
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
