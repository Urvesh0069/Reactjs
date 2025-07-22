import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentForm from "./components/studentform";
import StudentList from "./components/student_list";
import Home from "./components/home";

const App = () => {
  const [students, setStudents] = useState([]);

  // Handler to add a student from StudentForm
  const handleAddStudent = (student) => {
    setStudents([...students, student]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route
            path="/add"
            element={<StudentForm onAddStudent={handleAddStudent} />}
          />
          <Route path="/list" element={<StudentList students={students} />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
