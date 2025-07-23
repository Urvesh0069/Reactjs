import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Navbar, StudentForm, StudentList } from "./components/index";

const App = () => {
  const [students, setStudents] = useState([]);

  const handleAddStudent = (student) => {
    setStudents([...students, student]);
  };

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<StudentForm onaddstudent={handleAddStudent} />} />
        <Route path="/list" element={<StudentList students={students} />} />
      </Routes>
    </div>
  );
};

export default App;