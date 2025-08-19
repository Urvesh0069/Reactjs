// ContactCollection.jsx
import { getContects, updateContect, deleteContect } from "../services/service";
import { useEffect, useState } from "react";

const Contectcollection = () => {
  const [contects, setContects] = useState([]);
  const [editing, setEditing] = useState(null); 
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const fetchContects = async () => {
    const data = await getContects();
    setContects(data);
  };

  useEffect(() => {
    fetchContects();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEdit = (contact) => {
    setEditing(contact.id);
    setFormData({
      name: contact.name,
      email: contact.email,
      message: contact.message,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!editing) return;

    await updateContect(editing, formData);
    setEditing(null);
    setFormData({ name: "", email: "", message: "" });
    fetchContects(); 
    alert("Contact updated successfully!");
  };

  return (
    <>
      <h1 className="text-2xl font-bold text-center my-4">
        Contact Collection
      </h1>

      {editing && (
        <form
          onSubmit={handleUpdate}
          className="max-w-md mx-auto bg-yellow-50 shadow-md rounded p-6 mb-6"
        >
          <h2 className="text-xl font-bold text-center text-yellow-600 mb-4">
            Update Contact
          </h2>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-2 mb-3 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-2 mb-3 rounded"
          />
          <textarea
            name="message"
            placeholder="Enter your message"
            rows="3"
            value={formData.message}
            onChange={handleChange}
            className="w-full border p-2 mb-3 rounded"
          />
          <button
            type="submit"
            className="w-full bg-yellow-600 text-white py-2 rounded hover:bg-yellow-700 transition"
          >
            Update
          </button>
        </form>
      )}

      <div className="max-w-2xl mx-auto bg-white shadow-md rounded p-6">
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Message</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {contects.map((contect) => (
              <tr key={contect.id}>
                <td className="border px-4 py-2">{contect.name}</td>
                <td className="border px-4 py-2">{contect.email}</td>
                <td className="border px-4 py-2">{contect.message}</td>
                <td className="border px-4 py-2 flex gap-3">
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => deleteContect(contect.id).then(fetchContects)}
                  >
                    Delete
                  </button>
                  <button
                    className="text-blue-500 hover:text-blue-700"
                    onClick={() => handleEdit(contect)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Contectcollection;
