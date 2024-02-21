import React from "react";
import Input from "./Input";
import Output from "./Output";

import { provider } from "../Api";

function Container() {
  return (
    <provider>
      <div className="flex items-center justify-between h-screen">
        <Input />
        <Output />
      </div>
    </provider>
  );
}

export default Container;
