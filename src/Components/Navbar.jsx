  import React, { useState, useEffect } from "react";
  import Logo from "../assets/Logo.png";
  import { Link } from "react-scroll";

  function Navbar() {
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setSticky(window.scrollY > 50);
      };

      window.addEventListener("scroll", handleScroll);

      // Cleanup the event listener on component unmount
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    return (
      <div
        className={`flex justify-between items-center px-40 fixed w-full h-[100px] z-10 top-0 left-0 cursor-pointer transition-all duration-300 ${
          sticky ? "bg-gray-700 shadow-md" : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <div>
          <img className="w-[200px]" src={Logo} alt="Logo" />
        </div>

        {/* Menu */}
        <div className="text-white">
          <ul className="flex gap-9 text-2xl items-center">
            <li>
              <Link to="hero" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li>
              <Link to="programs" smooth={true} duration={500} offset={-300}>
                Programs
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={500} offset={-150}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="campus" smooth={true} duration={500} offset={-260}>
                Campus
              </Link>
            </li>
            <li>
              <Link to="testimonials" smooth={true} duration={500} offset={-280}>
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-260}
                className="bg-white text-black px-4 py-2 rounded-full cursor-pointer"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  export default Navbar;
