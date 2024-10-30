import { Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar";
import Home from "./pages/Home";
import About from "./pages/About";
import Create from "./pages/Create";

const Hero = () => {
  return (
    <>
      <div className="grid grid-cols-5 gap-3 h-[90vh]">
        <div className="max-lg:hidden col-span-1 h-full bg-gray-800">
          <Sidebar />
        </div>
        <div className="col-span-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/create" element={<Create />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Hero;
