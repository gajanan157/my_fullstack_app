import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const isAuthenticated = !!localStorage.getItem("token");
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const publicLinks = [{ name: "Login", path: "/login" }];
  const authLinks = [{ name: "Dashboard", path: "/dashboard" }];

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
    console.log("tttb")
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  const renderLinks = () => (
    <>
      {navLinks.map(({ name, path }) => (
        <li key={name}>
          <Link
            to={path}
            onClick={() => setIsOpen(false)}
            className={`block py-2 px-4 hover:text-blue-400 ${
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
              onClick={() => setIsOpen(false)}
              className={`block py-2 px-4 hover:text-blue-400 ${
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
              onClick={() => setIsOpen(false)}
              className={`block py-2 px-4 hover:text-blue-400 ${
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
            onClick={() => {
              setIsOpen(false);
              handleLogout();
            }}
            className="block py-2 px-4 text-left w-full hover:text-red-400"
          >
            Logout
          </button>
        </li>
      )}
    </>
  );

  return (
    <nav className="sticky top-0 z-50 bg-gray-950 text-white shadow-md">
      <div className="flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
          Gajanan.dev
        </h1>

        {/* Desktop nav */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium items-center">
          {renderLinks()}
        </ul>

        {/* Mobile menu button */}
        <button onClick={toggleMenu} className="md:hidden">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <ul className="md:hidden px-6 pb-4 space-y-2 text-sm font-medium bg-gray-900 border-t border-gray-800">
          {renderLinks()}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
