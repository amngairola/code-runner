import React, { useState } from "react";

import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const [dropdown, setDropdown] = useState("Languages");
  const [Mode, setMode] = useState("Light");

  const ChangeValue = (value) => {
    setDropdown(value);
    setIsDropdownOpen(false);
  };

  const ChangeTheam = (value) => {
    if (Mode === "Light") {
      setMode("Dark");
    } else {
      setMode("Light");
    }
  };

  return (
    <header className="py-2 shadow bg-gradient-to-r from-blue-500 to-purple-500">
      <div className=" flex items-center justify-between">
        <div className="text-xl fint-bold">Logo</div>
        {/* dropdown */}
        <div className="relative inline-block text-left">
          <button
            onClick={toggleDropdown}
            className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-gray-700 hover:bg-gray-600 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-gray-800"
          >
            {dropdown}
          </button>
          {isDropdownOpen && (
            <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <div className="py-1">
                <button
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => ChangeValue("java")}
                >
                  java
                </button>
                <button
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => ChangeValue("c++")}
                >
                  c++
                </button>
                <button
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => ChangeValue("python")}
                >
                  python
                </button>
              </div>
            </div>
          )}
        </div>
        {/*button */}
        <button
          className="ml-4 mr-4 px-3 py-4 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-800"
          onClick={() => ChangeTheam()}
        >
          {Mode}
        </button>

        <button className="ml-4 mr-4 px-3 py-4 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-800">
          Run
        </button>
      </div>
    </header>
  );
}

export default Header;
