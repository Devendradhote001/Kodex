import React, { useContext } from "react";
import { NavLink, useLocation } from "react-router";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  let { pathname } = useLocation();
  console.log(pathname)

  let { setLoggedInUser } = useAuth();
  return (
    <div className="flex flex-col px-4 py-8 justify-between border-r border-gray-500">
      <div className="flex flex-col gap-10">
        <h1 className="text-2xl font-bold">Logo</h1>
        <div className="flex flex-col gap-5">
          <NavLink
            className={({ isActive }) =>
              isActive && pathname === "/dashboard"
                ? "text-red-600 font-semibold"
                : ""
            }
            to="/dashboard"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-red-600 font-semibold" : ""
            }
            to={`/dashboard/about/9`}
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-red-600 font-semibold" : ""
            }
            to="/dashboard/contact"
          >
            Contact
          </NavLink>
        </div>
      </div>
      <button
        onClick={() => {
          localStorage.removeItem("log user");
          setLoggedInUser(null);
        }}
        className="bg-black text-white py-3 text-xl cursor-pointer rounded-xl"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
