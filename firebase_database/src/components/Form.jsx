import { useState } from "react";
import { addContect } from "../services/service";

const SimpleForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Form Submitted Successfully!");
    addContect(formData).then(() => {
      alert("Contact added successfully!");
    });

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white shadow-md rounded p-6 mt-10"
    >
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">
        Contact Form
      </h2>

      <input
        type="text"
        name="name"
        placeholder="Enter your name"
        value={formData.name}
        onChange={handleChange}
        className="w-full border p-2 mb-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={handleChange}
        className="w-full border p-2 mb-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <textarea
        name="message"
        placeholder="Enter your message"
        rows="4"
        value={formData.message}
        onChange={handleChange}
        className="w-full border p-2 mb-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        Submit
      </button>
    </form>
  );
};

export default SimpleForm;

