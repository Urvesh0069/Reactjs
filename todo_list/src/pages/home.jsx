import { useNavigate } from "react-router";
import { useState, useEffect } from "react";

const Home = () => {
  const [users, setUsers] = useState([]);

  console.log("users", users);

  const fetchUserData = async () => {
    try {
      const res = await fetch("http://localhost:3000/users");
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const navigate = useNavigate();

  const addUser = () => {
    navigate("/adduser");
  };

  const DeleteUser = async (id) => {
    await fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        fetchUserData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">User Data Table</h2>
        <button
          className="mb-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={addUser}
        >
          Add User
        </button>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-md overflow-hidden">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-4 py-2 text-left">Image</th>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Email</th>
                <th className="px-4 py-2 text-left">Phone</th>
                <th className="px-4 py-2 text-left">DOB</th>
                <th className="px-4 py-2 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, idx) => (
                <tr key={idx} className="border-t border-gray-200">
                  <td className="px-4 py-2">
                    <img
                      src={user.image}
                      alt="user"
                      className="w-12 h-12 rounded-full"
                    />
                  </td>
                  <td className="px-4 py-2">{user.name}</td>
                  <td className="px-4 py-2">{user.email}</td>
                  <td className="px-4 py-2">{user.number}</td>
                  <td className="px-4 py-2">{user.dob}</td>
                  <td className="px-4 py-2 space-x-2">
                    <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 text-sm">
                      Edit
                    </button>
                    <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm"
                    onClick={() => DeleteUser(user.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Home;
