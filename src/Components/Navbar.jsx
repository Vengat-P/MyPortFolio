import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar bg-base-300 text-base-content text-xl shadow-md flex justify-between">
      <div className="flex w-full justify-between ">
        <Link
          to="/"
          className="  py-2 px-3 font-bold text-primary "
        >
          Vengat
        </Link>
        <div className="flex items-center">
          <div className="dropdown sm:block md:hidden dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-5 w-5 stroke-current"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>{" "}
                </svg>
              </div>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link
                  to="/home"
                  className="  py-2 px-3 hover:bg-primary hover:text-white"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/fitnesslogs"
                  className="py-2 px-3 hover:bg-primary hover:text-white"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/nutritionlogs"
                  className=" py-2 px-3 hover:bg-primary hover:text-white"
                >
                  About me
                </Link>
              </li>
              <li>
                <Link
                  to="/goals"
                  className=" py-2 px-3 hover:bg-primary hover:text-white "
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <ul className="hidden font-medium p-4 md:flex md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0  md:bg-base-300 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 rounded-sm hover:text-primary md:bg-transparent  md:p-0 md:dark:text-blue-500  dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="block py-2 px-3 rounded-sm hover:text-primary  md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block py-2 px-3  hover:text-primary  md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About me
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block py-2 px-3  hover:text-primary  md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
