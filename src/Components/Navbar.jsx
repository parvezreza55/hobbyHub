import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { FaCircleUser } from "react-icons/fa6";
import { Tooltip } from "react-tooltip";
import { Bounce, toast } from "react-toastify";

const Navbar = () => {
  const { user, signOutuser } = use(AuthContext);
  console.log(user?.photoURL);
  const handleSignOut = () => {
    signOutuser().then(() => {
      toast.warn("Log Out successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    });
  };

  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "underline" : "")}
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "underline" : "")}
          to={"/allgroup"}
        >
          All Groups
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "underline" : "")}
          to={"/create-group"}
        >
          Create Group
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "underline" : "")}
          to={"/my-group"}
        >
          My Groups
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar md:w-11/12 mx-auto py-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost  lg:hidden"
            >
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to={"/"} className=" text-xl">
            {" "}
            <div className="text-2xl md:text-4xl font-bold ">
              Hobby<span className="text-teal-500">Hub</span>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end space-x-3">
          <div className="z-10">
            {user ? (
              <>
                <a data-tooltip-id="my-tooltip">
                  {" "}
                  <img
                    className="rounded-full w-10"
                    src={user?.photoURL}
                    alt=""
                  />
                </a>
                <Tooltip
                  id="my-tooltip"
                  content={user?.displayName}
                  events={["hover"]}
                />
              </>
            ) : (
              <FaCircleUser></FaCircleUser>
            )}
          </div>
          {user ? (
            <button
              onClick={handleSignOut}
              className="btn  text-white bg-gray-700"
            >
              LogOut
            </button>
          ) : (
            <Link to={"/auth/login"} className="btn">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
