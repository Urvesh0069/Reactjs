import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Navbar, StudentForm, StudentList } from "./components/index";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<StudentForm />} />
        <Route path="/list" element={<StudentList />} />
      </Routes>
    </div>
  );
};

export default App;