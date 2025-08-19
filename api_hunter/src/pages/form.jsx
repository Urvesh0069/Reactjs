import React, { useState, useEffect } from "react";
import {
  adduser,
  getUsers,
  deleteUser,
  updateUser,
} from "../APIs/crud";

const UserForm = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const data = await getUsers();
    setUsers(data);
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingId) {
      await updateUser(editingId, formData);
      setEditingId(null);
    } else {
      await adduser(formData);
    }
    setFormData({ name: "", email: "" });
    fetchUsers();
  };

  const handleDelete = async (id) => {
    await deleteUser(id);
    fetchUsers();
  };

  const handleEdit = (user) => {
    setFormData({ name: user.name, email: user.email });
    setEditingId(user.id);
  };

  return (
    <div className="p-8 font-sans">
      <h2 className="text-3xl font-semibold mb-4">
        {editingId ? "Update User" : "Add User"}
      </h2>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 bg-white p-4 shadow-md rounded-lg w-full max-w-md"
      >
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter name"
          required
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter email"
          required
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className={`py-2 rounded-md text-white font-medium ${
            editingId
              ? "bg-green-500 hover:bg-yellow-600"
              : "bg-red-500 hover:bg-red-600"
          }`}
        >
          {editingId ? "Update User" : "Add User"}
        </button>
      </form>

      {/* User List */}
      <h3 className="text-xl font-semibold mt-6 mb-3">User List</h3>
      <div className="overflow-x-auto">
        <table className="table-auto border-collapse border border-gray-300 w-full text-left shadow-md">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-4 py-2">ID</th>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th
                className="border border-gray-300 px-4 py-2 text-center"
                colSpan={2}
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">{u.id}</td>
                <td className="border border-gray-300 px-4 py-2">{u.name}</td>
                <td className="border border-gray-300 px-4 py-2">{u.email}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <button
                    onClick={() => handleEdit(u)}
                    className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded-md"
                  >
                    Edit
                  </button>
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <button
                    onClick={() => handleDelete(u.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserForm;
