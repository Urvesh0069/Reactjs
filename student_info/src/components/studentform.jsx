import { useState } from "react";

const StudentForm = ({ onaddstudent }) => {
  const initialState = {
    id: "",
    name: "",
    age: "",
    gender: "",
    mobile: "",
    email: "",
    course: "",
    admissiondate: "",
    image: "",
  };

  const [student, setStudent] = useState(initialState);

  const handleChange = (e) =>
    setStudent((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    onaddstudent(student);
    setStudent(initialState);
    alert("Student added successfully!");
    console.log("Form submitted:", student);
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () =>
        setStudent((s) => ({ ...s, image: reader.result }));
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-[#443C68] p-6 text-gray-100">
      <form
        onSubmit={handleSubmit}
        className="mt-[5%] max-w-2xl mx-auto p-6 bg-gradient-to-br from-[#18122B] to-[#393053] rounded-lg shadow-2xl text-white"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Add New Student</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block mb-2 text-sm font-medium text-[#CCC2F2]">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={student.name}
              onChange={handleChange}
              className="w-full p-2 border border-[#635985] bg-[#18122B] text-white placeholder-gray-400 rounded"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-[#CCC2F2]">
              Age
            </label>
            <input
              type="number"
              name="age"
              value={student.age}
              onChange={handleChange}
              className="w-full p-2 border border-[#635985] bg-[#18122B] text-white placeholder-gray-400 rounded"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-[#CCC2F2]">
              Gender
            </label>
            <select
              name="gender"
              autoComplete="sex"
              value={student.gender}
              onChange={handleChange}
              className="w-full p-2 border border-[#635985] bg-[#18122B] text-white rounded"
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-[#CCC2F2]">
              Mobile
            </label>
            <input
              type="tel"
              name="mobile"
              value={student.mobile}
              onChange={handleChange}
              className="w-full p-2 border border-[#635985] bg-[#18122B] text-white placeholder-gray-400 rounded"
              required
              pattern="[0-9]{10}"
              placeholder="Enter 10-digit mobile number"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-[#CCC2F2]">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={student.email}
              onChange={handleChange}
              className="w-full p-2 border border-[#635985] bg-[#18122B] text-white placeholder-gray-400 rounded"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-[#CCC2F2]">
              Course
            </label>
            <input
              type="text"
              name="course"
              value={student.course}
              onChange={handleChange}
              className="w-full p-2 border border-[#635985] bg-[#18122B] text-white placeholder-gray-400 rounded"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-[#CCC2F2]">
              Admission Date
            </label>
            <input
              type="date"
              name="admissiondate"
              value={student.admissiondate}
              onChange={handleChange}
              className="w-full p-2 border border-[#635985] bg-[#18122B] text-white rounded"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-[#CCC2F2]">
              Profile Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full p-2 border border-[#635985] bg-[#18122B] text-white rounded"
            />
            {student.image && (
              <img
                src={student.image}
                alt="Profile Preview"
                className="mt-2 h-16 w-16 object-cover rounded-full border-2 border-[#635985]"
              />
            )}
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 w-full bg-[#443C68] hover:bg-[#18122B] text-white py-2 px-4 rounded transition"
        >
          Add Student
        </button>
      </form>
    </div>
  );
};

export default StudentForm;
