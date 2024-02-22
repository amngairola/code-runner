import React, { useState } from "react";
import TheamButton from "../Theam/TheamButton";
import { useApi } from "../ContextApi";

function Header() {
  const { executeScript } = useApi();
  const [selectedLanguage, setSelectedLanguage] = useState("Languages");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setIsDropdownOpen(false); // Close the dropdown after selecting a language
  };

  const handleRunButtonClick = () => {
    // Execute script based on the selected language
    if (selectedLanguage !== "Languages") {
      executeScript(selectedLanguage);
    } else {
      // Handle case where no language is selected
      console.log("Please select a language");
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle the dropdown state
  };

  return (
    <header className="py-2 shadow bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="flex items-center justify-between">
        <div className="text-xl font-bold">Logo</div>
        {/* Dropdown */}
        <div className="relative inline-block text-left">
          <button
            onClick={toggleDropdown} // Toggle dropdown when button is clicked
            className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-gray-700 hover:bg-gray-600 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-gray-800"
          >
            {selectedLanguage}
          </button>
          {isDropdownOpen && (
            <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <div className="py-1">
                <button
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => handleLanguageChange("java")}
                >
                  Java
                </button>
                <button
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => handleLanguageChange("c++")}
                >
                  C++
                </button>
                <button
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => handleLanguageChange("python")}
                >
                  Python
                </button>
              </div>
            </div>
          )}
        </div>
        {/* Theme Button */}
        <TheamButton />
        {/* Run Button */}
        <button
          className="ml-4 mr-4 px-3 py-4 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-800"
          onClick={handleRunButtonClick}
        >
          Run
        </button>
      </div>
    </header>
  );
}

export default Header;
