import React, { useState } from "react";
import Navbar, { Sidebar } from "./Navbar";

export const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const res = await fetch("http://localhost:5000/users");
    // const users = await res.json();

    // const emailExists = users.some(
    //   (u) => u.email.toLowerCase() === formData.email.toLowerCase()
    // );

    // if (emailExists) {
    //   alert("Email already registered!");
    //   return;
    // }

  //   const saveRes = await fetch("http://localhost:5000/users", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(formData),
  //   });

  //   if (saveRes.ok) {
  //     alert("User registered successfully!");
  //     setFormData({ name: "", email: "", password: "" });
  //   } else {
  //     alert("Something went wrong!");
  //   }
  // };

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const emailExists = users.some(
    (u) => u.email.toLowerCase() === formData.email.toLowerCase()
  );

  if (emailExists) {
    alert("Email already registered!");
    return;
  }

  users.push(formData);
  localStorage.setItem("users", JSON.stringify(users));
  alert("User registered successfully!");
  setFormData({ name: "", email: "", password: "" });
  }

  

  return (
    <div className="min-h-150 flex items-center justify-center py-10 rounded">
      <div className="bg-white p-8 rounded shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-purple-800 mb-6">
          Sign Up
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, name: e.target.value }))
              }
              required
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
              required
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, password: e.target.value }))
              }
              required
              placeholder="Create a password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-800 text-white py-2 rounded-md hover:bg-purple-900 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-4 text-center text-gray-600 text-sm">
          Already have an account?{" "}
          <a href="/login" className="text-purple-700 hover:underline">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

const Signup = () => {
  return (
    <div className="min-h-screen bg-white flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <div className="sticky top-0 z-10 bg-white shadow">
          <Navbar heading="Sign Up" />
        </div>

        <main className="space-y-6 p-6">
          <SignupForm />
        </main>
      </div>
    </div>
  );
};

export default Signup;
