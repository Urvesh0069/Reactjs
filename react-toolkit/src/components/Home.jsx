import { useState } from "react";
import { addTodo, removeTodo } from "../feature/TodoSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Home = () => {
  const [formData, setFormData] = useState({
    id: Date.now(),
    name: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    dispatch(addTodo(formData));
    setFormData({ id: Date.now(), name: "", email: "", password: "" });
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
        Simple Form
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Home;

export const GetTodos = () => {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Todos</h2>
      <ul className="list-disc pl-5">
        {todos.map((todo) => (
          <li key={todo.id} className="mb-2">
            {todo.name} - {todo.email}
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="text-red-500 hover:text-red-700"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
