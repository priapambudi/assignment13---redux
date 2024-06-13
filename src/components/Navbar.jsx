import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "../redux/slices/darkModeSlice";

const Navbar = () => {
  const darkMode = useSelector((state) => state.darkMode.isdarkMode);
  const dispatch = useDispatch();

  const handleDarkMode = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <div className="">
      <div
        className={`flex justify-between items-center p-5  w-full mx-auto bg-slate-200 ${
          darkMode && "bg-slate-700"
        } `}
      >
        <div className={`text-3xl font-bold  ${darkMode && "text-white"}`}>
          Logo
        </div>
        <div
          className={`md:static absolute md:min-h-fit  min-h-[40vh] left-0 top-[-100%] w-full md:w-auto flex items-center px-5 ${
            darkMode && "text-white"
          }`}
        >
          <ul className="flex flex-col gap-6 md:flex-row md:items-center md:gap-10">
            <li>
              <a className="hover:text-slate-400" href="">
                Home
              </a>
            </li>
            <li className="hover:text-slate-400">
              {" "}
              <a href="">About</a>
            </li>
            <li className="hover:text-slate-400">
              {" "}
              <a href="">Contact</a>
            </li>
            <li className="hover:text-slate-400">
              {" "}
              <a href="">Product</a>
            </li>
          </ul>
        </div>
        <div>
          <button
            className={`px-5 py-2 rounded-full ${
              darkMode ? "bg-slate-200 text-black" : "bg-slate-700 text-white"
            }`}
            onClick={handleDarkMode}
          >
            {darkMode ? "Light" : "Dark"}
          </button>
          <box-icon name="menu"></box-icon>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
