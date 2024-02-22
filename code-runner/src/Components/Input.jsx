import React, { useState } from "react";
import { useApi } from "../ContextApi";

function Input() {
  const { setScript } = useApi();
  const [scriptInput, setScriptInput] = useState("");

  const handleScriptChange = (event) => {
    setScriptInput(event.target.value);
  };
  const handleSubmit = () => {
    setScript(script);
  };

  return (
    <div className="w-1/2 mt-4 h-screen">
      <div className="w-full h-4/5 px-3 py-2 text-base leading-normal bg-white border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent overflow-y-scroll">
        <textarea
          className="w-full h-screen px-3 py-2 text-base leading-normal bg-white border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent  "
          placeholder="Write your code here..."
          value={scriptInput}
          onChange={handleScriptChange}
        ></textarea>
      </div>
      <button
        className="ml-4 mr-4 px-3 py-4 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-800"
        onClick={handleSubmit}
      >
        Done?
      </button>
    </div>
  );
}

export default Input;
