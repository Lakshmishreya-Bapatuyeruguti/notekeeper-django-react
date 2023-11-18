import React from "react";
import landing from "../assets/landing.png";
import Login from "../components/Login";
function Landing() {
  return (
    <div className=" w-full h-screen bg-[#04031C] text-center">
      <div className="py-24 w-5/6 px-24  flex justify-around sm:flex max-sm:flex-col max-sm:items-center">
        <img src={landing} alt="landing/" className="w-auto"></img>
        <Login />
      </div>
    </div>
  );
}

export default Landing;
