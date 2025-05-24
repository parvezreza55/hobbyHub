import React from "react";
import { FaFacebook, FaGithub, FaYoutube } from "react-icons/fa6";
import { Link, NavLink } from "react-router";

const Footer = () => {
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
    <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
      <nav className="grid grid-flow-col gap-4">
        <ul className="flex gap-5">{links}</ul>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <Link to={"https://github.com/parvezreza55"}>
            <FaGithub size={25}></FaGithub>
          </Link>
          <Link to={"https://www.youtube.com/"}>
            <FaYoutube size={25}></FaYoutube>
          </Link>
          <Link to={"https://www.facebook.com/parvez.reza.312357"}>
            <FaFacebook size={25}></FaFacebook>
          </Link>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by
          HobbyHub
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
