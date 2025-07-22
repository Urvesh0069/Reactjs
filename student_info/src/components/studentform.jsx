import React, { useState } from "react";

const StudentForm = () => {
  const [form, setForm] = useState({
    name: "",
    age: "",
    email: "",
    course: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Student Info:\nName: ${form.name}\nAge: ${form.age}\nEmail: ${form.email}\nCourse: ${form.course}`);
    setForm({ name: "", age: "", email: "", course: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg p-8"
    >
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
        Student Information Form
      </h2>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Name:</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Age:</label>
        <input
          type="number"
          name="age"
          value={form.age}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Email:</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 mb-2">Course:</label>
        <input
          type="text"
          name="course"
          value={form.course}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        Submit
      </button>
    </form>
  );
};

export default StudentForm;