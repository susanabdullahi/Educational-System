import React from "react";
import heroImage from "../assets/hero.png"; 
import dark_arrow from '../assets/dark-arrow.png';

function Hero() {
  return (
    <div id="hero"
      className="w-full min-h-screen flex items-center justify-center"
      style={{
        background: `linear-gradient(rgba(8, 0, 58, 0.7), rgba(8, 0, 58, 0.7)), url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
      }}
    >
      <div className="text-center flex flex-col max-w-[800px]">
        <h1 className="text-6xl font-bold mx-auto">
          We Ensure better education for a better world
        </h1>
        <p className="py-6 max-w-[700px] mx-auto">
          Our cutting-edge curriculum is designed to empower students with the
          knowledge, skills, and experiences needed to excel in the dynamic
          field of education.
          <br />
          <button className="bg-white text-black px-4 py-3 rounded-full mt-5 cursor-pointer text-xl">
            Explore more <img className="inline w-[20px]" src={dark_arrow} alt="" />
          </button>
        </p>
      </div>
    </div>
  );
}

export default Hero;
