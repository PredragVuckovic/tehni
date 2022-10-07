import React, { Component, useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import ListUsers from "../pages/ListUsers";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {!isOpen ? (
        <button
          className="fixed z-50 flex items-center cursor-pointer left-10 top-6"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg fill="#2563EB" viewBox="0 0 100 80" width="40" height="40">
            <rect width="100" height="10"></rect>
            <rect y="30" width="100" height="10"></rect>
            <rect y="60" width="100" height="10"></rect>
          </svg>
        </button>
      ) : (
        <button
          className="text-xl text-white fixed top-6 left-5 z-30 "
          onClick={() => setIsOpen(!isOpen)}
        >
          X
        </button>
      )}
      <div
        className={`top-0 left-0 fixed bg-blue-500 w-[35vw] h-full p-10 } ${
          isOpen ? "translate-x-0" : "translate-y-full"
        } ease-in-out duration-300`}
      >
        <h2 className="text-4xl text-white top-6 mx-4 my-2">
          <Link to="/Main">HSC-ITAS</Link>
        </h2>
        <ul>
          <br />
          <CustomLink
            to="/ListUsers"
            className="text-2xl mx-10 my-6 text-white"
          >
            Users
          </CustomLink>
        </ul>
      </div>
    </>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
