import React from 'react'

const Adduser = () => {
  return (
    <>
          <div className="max-w-md mx-auto mt-25 p-6 bg-white rounded-lg shadow-xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Add User</h2>

        <form className="space-y-4">
          {/* Name */}
          <div>
            <label className="block font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter name"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block font-medium mb-1">Phone Number</label>
            <input
              type="tel"
              name="number"
              placeholder="Enter phone number"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          {/* DOB */}
          <div>
            <label className="block font-medium mb-1">Date of Birth</label>
            <input
              type="date"
              name="dob"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block font-medium mb-1">Profile Image</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Adduser
