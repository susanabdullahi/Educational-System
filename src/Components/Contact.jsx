import React, { useState } from 'react';
import msg_icon from "../assets/msg-icon.png";
import mail_icon from "../assets/mail-icon.png";
import phone_icon from "../assets/phone-icon.png";
import location_icon from "../assets/location-icon.png";
import white_arrow from "../assets/white-arrow.png";

function Contact() {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "dccb95b7-5013-47a6-b466-64018569f1d3");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Email Sent Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  return (
    
    <div id="contact" className="m-[100px] mx-[400px] flex justify-between">
      <div>
        <h3 className="text-3xl font-bold flex items-center mb-7">
          <img
            className="inline mr-2"
            src={msg_icon}
            alt="Message Icon"
            aria-label="Message"
          />
          Send Us a Message
        </h3>
        <p className="mt-4 max-w-md mb-7">
          Feel free to reach out through the contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>

        <ul className="mt-4 space-y-2">
          <li className="flex items-center">
            <img
              className="inline mr-2"
              src={mail_icon}
              alt="Mail Icon"
              aria-label="Email"
            />
            Susanabdullahi1@gmail.com
          </li>
          <li className="flex items-center">
            <img
              className="inline mr-2"
              src={phone_icon}
              alt="Phone Icon"
              aria-label="Phone"
            />
            +905077614337
          </li>
          <li className="flex items-center">
            <img
              className="inline mr-2"
              src={location_icon}
              alt="Location Icon"
              aria-label="Location"
            />
            <div>
              100 Yil Karabuk Turkey
              <br /> Ilim Yayma Kiz Yurdu
            </div>
          </li>
        </ul>
      </div>

      <div>
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-1">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter Your Name"
              className="border rounded-md p-2 w-full"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block mb-1">
              Your Phone Number
            </label>
            <input
              type="tel" // Changed to tel
              id="phone"
              placeholder="Enter Your Phone Number"
              className="border rounded-md p-2 w-full"
              required
            />
          </div>

          <div className="mb-4 m text-2xl">
            <label  htmlFor="message" className="block mb-1">
              Write your Message Here
            </label>
            <textarea
              id="message"
              rows="4"
              name="message"
              placeholder="Enter Your Message"
              className="border rounded-md p-2 w-full bg-slate-300   "
              required
            />
          </div>

          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl mb-6" type="submit">
            Submit Now <img className="inline w-[20px]" src={white_arrow} alt="whiteArrow" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
}

export default Contact;
