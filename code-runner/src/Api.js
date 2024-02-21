import React, { createContext, useContext, useState } from "react";

// Create a context
const context = createContext();
const clientId = "527e4dc4253d21712a7dc7245d1d61c0";
const clientSecret =
  "347e4fb9199d6d8779587b99d2b205109d089197cd57a773e8f221ac2732ff5b";

// Create context provider
export const ApiProvider = ({ children }) => {
  const [script, setScript] = useState("");
  const [language, setLanguage] = useState("");
  const [response, setResponse] = useState(null);

  const executeScript = async () => {
    try {
      const response = await fetch("https://api.jdoodle.com/v1/execute", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          script,
          language,
          clientId: clientId,
          clientSecret: clientSecret,
        }),
      });

      const data = await response.json();
      setResponse(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <context.Provider
      value={{
        script,
        setScript,
        language,
        setLanguage,
        response,
        executeScript,
      }}
    >
      {children}
    </context.Provider>
  );
};

export default function useApi() {
  return useContext(context);
}
