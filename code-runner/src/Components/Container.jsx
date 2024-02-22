import React, { useState } from "react";
import Input from "./Input";
import Output from "./Output";

function Container() {
  return (
    <div className="flex items-center justify-between h-screen">
      <Input />
      <Output />
    </div>
  );
}

export default Container;
