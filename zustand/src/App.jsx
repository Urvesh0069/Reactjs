import React from "react";
import BasicForm from "./components/form";
import Home from "./components/Home";

const App = () => {
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold text-center my-8">
          Welcome to My App
        </h1>
      </div>
      <BasicForm />
      <Home />
    </>
  );
};

export default App;
