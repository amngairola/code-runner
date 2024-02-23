import React, { useState } from "react";
import { useContextApi } from "../ContextApi";

export default function Output() {
  const { response } = useContextApi();
  return (
    <div className="w-1/2 mt-4 h-screen">
      <div className="w-full h-4/5 px-3 py-2 text-base leading-normal bg-white border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent overflow-y-scroll">
        {response && (
          <textarea
            className="w-full h-screen px-3 py-2 text-base leading-normal bg-white border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent  "
            placeholder="Output..."
            value={output}
            readOnly
          ></textarea>
        )}
      </div>
    </div>
  );
}
