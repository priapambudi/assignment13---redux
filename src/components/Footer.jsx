import React from "react";
import { useSelector } from "react-redux";

const Footer = () => {
  const darkMode = useSelector((state) => state.darkMode.isdarkMode);
  return (
    <div
      className={`text-center bg-slate-200 ${
        darkMode && "bg-slate-700 text-white"
      } p-4`}
    >
      © 2024 Pria Pambudi
    </div>
  );
};

export default Footer;
