import { useNavigate } from "react-router";
import { useState, useEffect } from "react";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [searchYear, setSearchYear] = useState("");
  const [searchName, setSearchName] = useState("");
  const [uniqueYears, setUniqueYears] = useState([]);

  const navigate = useNavigate();

  const fetchUserData = async () => {
    try {
      const res = await fetch("http://localhost:3000/users");
      const data = await res.json();
      setUsers(data);

      const years = [...new Set(data.map(user => new Date(user.dob).getFullYear()))];
      setUniqueYears(years.sort());
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

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

  const filteredUsers = users.filter((user) => {
    const yearMatch = searchYear
      ? new Date(user.dob).getFullYear().toString() === searchYear
      : true;

    const nameMatch = user.name.toLowerCase().includes(searchName.toLowerCase());

    return yearMatch && nameMatch;
  });

  return (
    <div className="p-6 mt-20">
      <h2 className="text-2xl font-bold mb-4">User Data Table</h2>

      {/* 🔍 Search & Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-4 md:items-center md:justify-between">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded w-full md:w-1/2"
        />
        <select
          value={searchYear}
          onChange={(e) => setSearchYear(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded w-full md:w-1/3"
        >
          <option value="">All Years</option>
          {uniqueYears.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

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
            {filteredUsers.map((user, idx) => (
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
                  <button
                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 text-sm"
                    onClick={() => navigate(`/edituser/${user.id}`)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm"
                    onClick={() => DeleteUser(user.id)}
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

export default Home;
