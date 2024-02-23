import React from "react";
import Input from "./Input";
import Output from "./Output";
import { ApiProvider } from "../ContextApi";

function Container() {
  return (
    <ApiProvider>
      <div className="flex items-center justify-between h-screen">
        <Input />
        <Output />
      </div>
    </ApiProvider>
  );
}

export default Container;
