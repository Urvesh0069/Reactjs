import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Adduser = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    number: "",
    dob: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUser((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    alert("User added successfully!");
    setUser({
      name: "",
      email: "",
      number: "",
      dob: "",
      image: "",
    });

    navigate("/");
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 rounded-lg shadow-xl" style={{ backgroundColor: '#ECDFCC' }}>
      <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: '#3C3D37' }}>Add User</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={user.name}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          style={{ borderColor: '#697565', color: '#3C3D37', backgroundColor: '#ECDFCC' }}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          style={{ borderColor: '#697565', color: '#3C3D37', backgroundColor: '#ECDFCC' }}
        />
        <input
          type="tel"
          name="number"
          placeholder="Phone"
          value={user.number}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          style={{ borderColor: '#697565', color: '#3C3D37', backgroundColor: '#ECDFCC' }}
        />
        <input
          type="date"
          name="dob"
          value={user.dob}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          style={{ borderColor: '#697565', color: '#3C3D37', backgroundColor: '#ECDFCC' }}
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full border px-3 py-2 rounded"
          style={{ borderColor: '#697565', color: '#3C3D37', backgroundColor: '#ECDFCC' }}
        />
        <button
          type="submit"
          className="w-full py-2 rounded"
          style={{ backgroundColor: '#697565', color: '#ECDFCC' }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Adduser;
