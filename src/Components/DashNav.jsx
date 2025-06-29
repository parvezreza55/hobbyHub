import React from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/images/logo.png";

const DashNav = () => {
  const links = (
    <>
      <li>
        <NavLink className={"hover:bg-teal-300"} to={"/dashboard"}>
          Overview
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "underline  border-teal-100" : "hover:bg-teal-300"
          }
          to={"/dashboard/allgroup"}
        >
          All Groups
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "underline  border-teal-100" : "hover:bg-teal-300"
          }
          to={"/dashboard/my-group"}
        >
          My Groups
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "underline  border-teal-100" : "hover:bg-teal-300"
          }
          to={"/create-group"}
        >
          Create Group
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "underline  border-teal-100" : "hover:bg-teal-300"
          }
          to={"/"}
        >
          Go Home
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-base-300 w-fit h-fit md:h-[20em] md:p-10 rounded-2xl mt-7 md:mt-36 sticky top-36">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {" "}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />{" "}
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-300 rounded-box z-50 mt-3 w-52 p-2 shadow"
        >
          {links}
        </ul>
      </div>
      <div className=" hidden md:flex flex-col">
        <Link to={"/"} className=" text-xl">
          {" "}
          <div className="text-2xl md:text-4xl font-bold flex items-center">
            <img className="w-13" src={logo} alt="" />
            <div>
              Hobby<span className="text-teal-500">Hub</span>
            </div>
          </div>
        </Link>
        <div className="">
          {/* div 1  */}
          <div>
            <ul className="menu menu-vertical px-1">{links}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashNav;
