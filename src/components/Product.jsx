import React from "react";
import { useSelector } from "react-redux";
import cars1 from "../assets/cars1.jpg";
import cars2 from "../assets/cars2.jpg";

const Product = () => {
  const darkMode = useSelector((state) => state.darkMode.isdarkMode);
  return (
    <div className="">
      <div className="flex flex-col items-center justify-center h-[80%] gap-10 mx-10 my-12 md:flex-row">
        <div
          className={`flex flex-col gap-5 p-5 border rounded-xl md:flex-row border-slate-300 ${
            darkMode && "bg-slate-600 text-white border-slate-50"
          }`}
        >
          <div>
            <img className="w-full h-full" src={cars1} alt="product" />
          </div>
          <div>
            <h1 className="text-3xl">Porche</h1>
            <p className="mt-3 text-md">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut nemo
              corporis dolore quo veritatis placeat?
            </p>
            <div className="flex justify-between gap-5 mt-3">
              <h3 className="text-2xl">$500</h3>
              <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
                Buy
              </button>
            </div>
          </div>
        </div>
        <div
          className={`flex flex-col gap-5 p-5 border rounded-xl md:flex-row border-slate-300 ${
            darkMode && "bg-slate-600 text-white border-slate-50"
          }`}
        >
          <div>
            <img className="w-full h-full" src={cars2} alt="product" />
          </div>
          <div>
            <h1 className="text-3xl">Ferari</h1>
            <p className="mt-3 text-md">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut nemo
              corporis dolore quo veritatis placeat?
            </p>
            <div className="flex justify-between gap-5 mt-3">
              <h3 className="text-2xl">$500</h3>
              <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
                Buy
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
