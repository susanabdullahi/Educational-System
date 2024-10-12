import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-700 text-white text-2xl mt-[100px]">
      <div className="flex items-center justify-between px-40 h-[100px]">
        <p>© 2024 Susan. All rights reserved.</p>
        <ul className="flex gap-9 items-center">
          <li>
            <a href="/terms" className="hover:underline">Terms of Service</a>
          </li>
          <li>
            <a href="/privacy" className="hover:underline">Privacy Policy</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
