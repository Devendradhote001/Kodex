import React from "react";
import About from "./components/About";
import Home from "./components/Home";
import App from "./App";
import { ContextProvider } from "./context/MyContext";

const Context = () => {
  return (
    <div>
      <h1>Context</h1>

      <ContextProvider>
        <About />
        <Home />
        <App />
      </ContextProvider>
    </div>
  );
};

export default Context;
