
import React, { useState } from "react";
import Headings from "../Common/Heading";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Button from "../Common/Button";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Dashboard", route: "analytics" },
    
    { label: "My Blogs", route: "myblogs" },
    { label: "Categories", route: "categories" },
    { label: "Logout" },
  ];

  return (
    <div className="flex h-screen">
      
      <Button
        className="lg:hidden p-4 text-primary"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </Button>

      
      <aside
        className={`bg-primary text-tertiary flex flex-col p-6 fixed lg:static top-0 left-0 h-full z-50 transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 lg:w-64`}
      >
        <Headings type="h4" className="font-bold mb-10">
          Zarrin
        </Headings>

        <nav className="space-y-4">
          {menuItems.map((item) => (
            <Link
              key={item.route}
              to={`/dashboard/${item.route}`}
              className="block font-medium hover:text-secondary"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

     
      {isOpen && (
        <div
          className="fixed inset-0 bg-dark opacity-50 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default SideBar;
