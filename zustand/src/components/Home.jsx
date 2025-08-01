import React from "react";
import { useUserStore } from "../app/store";
const Home = () => {
  const users = useUserStore((state) => state.users);
  const removeUser = useUserStore((state) => state.removeUser);

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div
          className="bg-white p-8 rounded shadow-md w-full max-w-md
          space-y-4"
        >
          <h2
            className="text-2xl font-bold mb-6 text-center text
          -gray-800"
          >
            User List
          </h2>
          {users.length > 0 ? (
            <ul className="space-y-4">
              {users.map((user, index) => (
                <li key={index} className="flex justify-between items-center">
                  <span>
                    {user.name} ({user.email})
                  </span>
                  <button
                    onClick={() => removeUser(user.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No users added yet.</p>
          )}
        </div>
      </div>
      <div className="text-center mt-8">
        <p className="text-gray-600">Add users using the form above.</p>
      </div>
      <div className="text-center mt-4">
        <p className="text-gray-600">Total Users: {users.length}</p>
      </div>
    </>
  );
};

export default Home;
