import React, { useState } from "react";

function Input() {
  const [code, setCode] = useState("");

  const handleChange = (event) => {
    setCode(event.target.value);
  };

  return (
    <div className="w-1/2 mt-4 h-screen">
      <div className="w-full h-4/5 px-3 py-2 text-base leading-normal bg-white border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent overflow-y-scroll">
        <textarea
          className="w-full h-screen px-3 py-2 text-base leading-normal bg-white border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent  "
          placeholder="Write your code here..."
          value={code}
          onChange={handleChange}
        ></textarea>
      </div>
    </div>
  );
}

export default Input;
