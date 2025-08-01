import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isAuthenticated = !!localStorage.getItem("token");

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  // Public only
  const publicLinks = [{ name: "Login", path: "/login" }];

  // Auth only
  const authLinks = [{ name: "Dashboard", path: "/dashboard" }];

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login"; // redirect after logout
  };

  return (
    <nav className="sticky top-0 z-50 bg-gray-950 text-white shadow-md">
      <div className="w-full px-[30px] py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
          Gajanan.dev
        </h1>

        <ul className="flex space-x-6 text-sm font-medium items-center">
          {navLinks.map(({ name, path }) => (
            <li key={name}>
              <Link
                to={path}
                className={`hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-teal-400 to-blue-500 transition duration-300 ${
                  location.pathname === path ? "text-blue-400 font-semibold" : ""
                }`}
              >
                {name}
              </Link>
            </li>
          ))}

          {!isAuthenticated &&
            publicLinks.map(({ name, path }) => (
              <li key={name}>
                <Link
                  to={path}
                  className={`hover:text-blue-400 transition ${
                    location.pathname === path ? "text-blue-400 font-semibold" : ""
                  }`}
                >
                  {name}
                </Link>
              </li>
            ))}

          {isAuthenticated &&
            authLinks.map(({ name, path }) => (
              <li key={name}>
                <Link
                  to={path}
                  className={`hover:text-blue-400 transition ${
                    location.pathname === path ? "text-blue-400 font-semibold" : ""
                  }`}
                >
                  {name}
                </Link>
              </li>
            ))}

          {isAuthenticated && (
            <li>
              <button
                onClick={handleLogout}
                className="hover:text-red-400 transition"
              >
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
