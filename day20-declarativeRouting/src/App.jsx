import React from "react";
import Navbar from "./components/Navbar";
import { Routes } from "react-router";
import AppROutes from "./routes/AppROutes";

const App = () => {
  return (
    <div className="h-screen p-5">
      <Navbar />
      <AppROutes />
    </div>
  );
};

export default App;
