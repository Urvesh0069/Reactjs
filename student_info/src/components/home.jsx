import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="bg-blue-600 p-4 shadow">
        <div className="container mx-auto flex justify-between items-center">
          <span className="text-white text-xl font-bold">Student Info App</span>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="text-white hover:underline">Home</Link>
            </li>
            <li>
              <Link to="/add" className="text-white hover:underline">Add Student</Link>
            </li>
            <li>
              <Link to="/list" className="text-white hover:underline">Student List</Link>
            </li>
          </ul>
        </div>
      </nav>
      {/* Main Content */}
      <div className="flex flex-col items-center justify-center mt-20">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">Welcome to Student Info App</h1>
        <p className="text-lg text-gray-700 text-center max-w-xl">
          Manage student information easily. Use the navigation bar to add new students or view the student list.
        </p>
      </div>
    </div>
  );
};

export default Home;