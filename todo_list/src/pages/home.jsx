import { useNavigate } from "react-router-dom";
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

      const years = [
        ...new Set(data.map((user) => new Date(user.dob).getFullYear())),
      ];
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

    const nameMatch = user.name
      .toLowerCase()
      .includes(searchName.toLowerCase());

    return yearMatch && nameMatch;
  });

  return (
    <div className="p-6 mt-20 min-h-screen" style={{ backgroundColor: '#ECDFCC' }}>
      <h2 className="text-2xl font-bold mb-4" style={{ color: '#3C3D37' }}>User Data Table</h2>

      {/* 🔍 Search & Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-4 md:items-center md:justify-between">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          className="border px-4 py-2 rounded w-full md:w-1/2"
          style={{ borderColor: '#697565', color: '#3C3D37', backgroundColor: '#ECDFCC' }}
        />
        <select
          value={searchYear}
          onChange={(e) => setSearchYear(e.target.value)}
          className="border px-4 py-2 rounded w-full md:w-1/3"
          style={{ borderColor: '#697565', color: '#3C3D37', backgroundColor: '#ECDFCC' }}
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
        className="mb-4 px-4 py-2 rounded"
        style={{ backgroundColor: '#697565', color: '#ECDFCC' }}
        onClick={addUser}
      >
        Add User
      </button>

      <div className="overflow-x-auto">
        <table className="min-w-full border rounded-md overflow-hidden" style={{ backgroundColor: '#ECDFCC', borderColor: '#697565' }}>
          <thead style={{ backgroundColor: '#697565' }}>
            <tr>
              <th className="px-4 py-2 text-left" style={{ color: '#ECDFCC' }}>Image</th>
              <th className="px-4 py-2 text-left" style={{ color: '#ECDFCC' }}>Name</th>
              <th className="px-4 py-2 text-left" style={{ color: '#ECDFCC' }}>Email</th>
              <th className="px-4 py-2 text-left" style={{ color: '#ECDFCC' }}>Phone</th>
              <th className="px-4 py-2 text-left" style={{ color: '#ECDFCC' }}>DOB</th>
              <th className="px-4 py-2 text-left" style={{ color: '#ECDFCC' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, idx) => (
              <tr key={idx} className="border-t" style={{ borderColor: '#697565' }}>
                <td className="px-4 py-2">
                  <img
                    src={user.image}
                    alt="user"
                    className="w-12 h-12 rounded-full border-2"
                    style={{ borderColor: '#697565', backgroundColor: '#ECDFCC' }}
                  />
                </td>
                <td className="px-4 py-2" style={{ color: '#3C3D37' }}>{user.name}</td>
                <td className="px-4 py-2" style={{ color: '#3C3D37' }}>{user.email}</td>
                <td className="px-4 py-2" style={{ color: '#3C3D37' }}>{user.number}</td>
                <td className="px-4 py-2" style={{ color: '#3C3D37' }}>{user.dob}</td>
                <td className="px-4 py-2 space-x-2">
                  <button
                    className="px-3 py-1 rounded text-sm"
                    style={{ backgroundColor: '#697565', color: '#ECDFCC' }}
                    onClick={() => navigate(`/edituser/${user.id}`)}
                  >
                    Edit
                  </button>
                  <button
                    className="px-3 py-1 rounded text-sm"
                    style={{ backgroundColor: '#3C3D37', color: '#ECDFCC' }}
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
