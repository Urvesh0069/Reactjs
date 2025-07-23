import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-600 p-4 shadow-md h-16">
        <div className="container mx-auto flex justify-between items-center">
          <span className="text-black text-xl font-bold">Student Info App</span>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="text-[18px]">Home</Link>
            </li>
            <li>
              <Link to="/add" className="text-[18px]">Add New Student</Link>
            </li>
            <li>
              <Link to="/list" className="text-[18px]">View Students</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
