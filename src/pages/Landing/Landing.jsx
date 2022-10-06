import React from "react";
import "./assets/Landing.css";
import LandingImg from "./assets/landing-cover.svg";
import { Link } from "react-router-dom";

export const Landing = () => {
  return (
    <div className="flex flex-col justify-evenly items-center bg-primary h-screen">
      <h1 className="text-center text-3xl font-bold text-white">KosmApp</h1>
      <img src={LandingImg} alt="" className="w-4/5" />
      <div className="flex flex-col w-2/3 gap-2">
        <Link
          to="/daftar"
          className="bg-white py-3 text-center text-primary font-bold rounded-xl shadow-md"
        >
          Daftar
        </Link>
        <Link to="/masuk" className="py-3 text-center text-white font-bold">
          Masuk
        </Link>
      </div>
    </div>
  );
};
