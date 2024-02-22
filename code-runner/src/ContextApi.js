i; // ApiContext.js
import React, { createContext, useContext, useState } from "react";

const ApiContext = createContext();

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
          clientId: "your_client_id",
          clientSecret: "your_client_secret",
        }),
      });

      const data = await response.json();
      setResponse(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ApiContext.Provider
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
    </ApiContext.Provider>
  );
};

export const useApi = () => useContext(ApiContext);
