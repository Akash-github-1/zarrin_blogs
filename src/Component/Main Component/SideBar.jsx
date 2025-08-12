// import React from 'react'
// import Headings from '../Common/Heading'
// import { Link } from 'react-router-dom'

// const SideBar = () => {
//   return (
//     <div className="flex min-h-screen ">
//          <aside className="w-64  bg-primary text-tertiary flex flex-col p-6">
//         <Headings type="h4" className=" font-bold mb-10">Zarrin</Headings>
//         <nav className="space-y-4">
//           {["Dashboard", "Posts", "Categories", ].map((item) => (
//           <Link to={`/Dashboard/${item}`} className={`block font-medium hover:text-secondary ${item === "Dashboard" }`}>{item}</Link>
//           ))}
//         </nav>
//       </aside>
//     </div>
//   )
// }

// export default SideBar



import React, { useState } from "react";
import Headings from "../Common/Heading";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Icons

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
      {/* Hamburger for Mobile & Tablet */}
      <button
        className="lg:hidden p-4 text-primary"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`bg-primary text-tertiary flex flex-col p-6 fixed lg:static top-0 left-0 h-full z-50 transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 lg:w-64`}
      >
        <Headings type="h4" className="font-bold mb-10">
          Zarrin
        </Headings>

        <nav className="space-y-4">
          {["Dashboard", "Posts", "Categories"].map((item) => (
            <Link
              key={item}
              to={`/Dashboard/${item}`}
              className="block font-medium hover:text-secondary"
              onClick={() => setIsOpen(false)} // close on click (mobile)
            >
              {item}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default SideBar;

