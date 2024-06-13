import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import { useSelector } from "react-redux";

function App() {
  const darkMode = useSelector((state) => state.darkMode.isdarkMode);
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div
          className={`flex items-center justify-center flex-grow ${
            darkMode && "bg-slate-400"
          }`}
        >
          <Product />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
