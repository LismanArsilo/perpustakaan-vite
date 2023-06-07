import React from "react";
import heroBackground from "../../assets/hero-background.jpg";
import { Link } from "react-router-dom";
const HeroFragment = () => {
  return (
    <div
      className="bg-no-repeat bg-cover h-screen bg-local flex items-center"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: "100% auto",
      }}
    >
      <div className=" w-7/12 flex flex-col gap-5 ms-5">
        <h1 className="text-white tracking-wide font-extrabold text-2xl flex flex-col">
          <span>
            Welcome <span className="text-blue-500">Perpustakaan</span>
          </span>
          <span className="ms-60 ">
            <span className="text-blue-500">Online</span> <span>Indonesia</span>
          </span>
        </h1>
        <p className="text-white ps-56 text-center">
          Welcome to the Indonesian library! Browse data and information
          intelligently, make the right decisions, and become an agent of change
          on your journey to success.
        </p>
        <Link
          to="/gallery"
          className="text-black ms-5  text-center py-3 bg-blue-300 font-bold rounded-xl hover:bg-blue-800 hover:text-white"
        >
          Go To Gallery Indonesian
        </Link>
      </div>
    </div>
  );
};

export default HeroFragment;
