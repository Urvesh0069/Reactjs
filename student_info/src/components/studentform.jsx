import { useState } from "react";

const StudentForm = ({ onaddstudent }) => {
  const [student, setStudent] = useState({
    id: "",
    name: "",
    age: "",
    gender: "",
    mobile: "",
    email: "",
    course: "",
    admissiondate: "",
    image: "",
  });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onaddstudent(student);
    setStudent({
      id: "",
      name: "",
      age: "",
      gender: "",
      mobile: "",
      email: "",
      course: "",
      admissiondate: "",
      image: "",
    });
    console.log("Form submitted:", student);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setStudent({ ...student, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Add New Student</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={student.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">Age</label>
          <input
            type="number"
            name="age"
            value={student.age}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">Gender :</label>
          <select
            name="gender"
            autoComplete="sex"
            value={student.gender}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">Mobile</label>
          <input
            type="tel"
            name="mobile"
            value={student.mobile}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
            pattern="[0-9]{10}"
            placeholder="Enter 10-digit mobile number"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={student.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">Course</label>
          <input
            type="text"
            name="course"
            value={student.course}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">Admission Date</label>
          <input
            type="date"
            name="admissiondate"
            value={student.admissiondate}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">Profile Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {student.image && (
            <img src={student.image} alt="Profile Preview" className="mt-2 h-16 w-16 object-cover rounded-full" />
          )}
        </div>
      </div>
      <button
        type="submit"
        className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
      >
        Add Student
      </button>
    </form>
  );
};

export default StudentForm;