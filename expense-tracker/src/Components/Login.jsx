import Navbar, { Sidebar } from "./Navbar";

import { useState } from "react";

export const LoginForm = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();

  //     const res = await fetch("http://localhost:5000/users");
  //   const users = await res.json();

  //   const validUser = users.find(
  //     (user) =>
  //       user.email.toLowerCase() === credentials.email.toLowerCase() &&
  //       user.password === credentials.password
  //   );

  //   if (validUser) {
  //     alert("Login successful!");
  //     setCredentials({ email: "", password: "" });
  //     localStorage.setItem("loggedInUser", JSON.stringify(validUser));
  //   } else {
  //     alert("Invalid email or password.");
  //   }
  // };

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const validUser = users.find(
      (user) => 
        user.email.toLowerCase() === credentials.email.toLowerCase() &&
        user.password === credentials.password
    );
    if (validUser) {
      alert("Login successful!");
      setCredentials({ email: "", password: "" });
      localStorage.setItem("loggedInUser", JSON.stringify(validUser));
    } else {
      alert("Invalid email or password.");
    }
  };


  return (
    <div className="flex items-center justify-center min-h-[70vh] rounded">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded shadow-2xl w-full max-w-md"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-purple-800">
          Login
        </h2>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={credentials.email}
            onChange={(e) =>
              setCredentials((prev) => ({
                ...prev,
                email: e.target.value,
              }))
            }
            required
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block text-gray-700 mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={(e) =>
              setCredentials((prev) => ({
                ...prev,
                password: e.target.value,
              }))
            }
            required
            placeholder="Enter your password"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition"
        >
          Login
        </button>

        <p className="mt-4 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <a href="/signup" className="text-purple-600 hover:underline">
            Sign Up
          </a>
        </p>
      </form>
    </div>
  );
};

const Login = () => {
  return (
    <div className="min-h-screen bg-white flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <div className="sticky top-0 z-10 bg-white shadow">
          <Navbar heading="Login" />
        </div>

        <main className="p-6 space-y-6">
          <LoginForm />
        </main>
      </div>
    </div>
  );
};

export default Login;
