import React from "react";
import about_img from "../assets/about.png";
import play_icon from "../assets/play-icon.png";

function About() {
  return (
    <div id="about" className="my-24 mx-auto flex items-center justify-between w-11/12">
      {/* Left Section */}
      <div className="flex-1 max-w-[40%] relative">
        <img src={about_img} alt="About University" className="w-full rounded-lg" />
        <img 
          src={play_icon} 
          alt="Play Icon" 
          className="w-[70px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer" 
        />
      </div>

      {/* Right Section */}
      <div className="flex-1 max-w-[56%]">
        <h3 className="font-semibold text-[#212EA0] text-lg">ABOUT UNIVERSITY</h3>
        <h2 className="text-4xl font-bold text-[#000F38] my-2 max-w-[400px] mb-4">Nurturing Tomorrow's Leaders Today</h2>
        <p className="text-[#676767] mb-4">
          Embark on a transformative educational journey with our university's
          comprehensive education programs. Our cutting-edge curriculum is
          designed to empower students with the knowledge, skills, and
          experiences needed to excel in the dynamic field of education.
        </p>
        <p className="text-[#676767] mb-4">
          With a focus on innovation, hands-on learning, and personalized
          mentorship, our programs prepare aspiring educators to make a
          meaningful impact in classrooms, schools, and communities.
        </p>
        <p className="text-[#676767] mb-4">
          Whether you aspire to become a teacher, administrator, counselor, or
          educational leader, our diverse range of programs offers the perfect
          pathway to achieve your goals and unlock your full potential in
          shaping the future of education.
        </p>
      </div>
    </div>
  );
}

export default About;
