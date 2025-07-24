import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="bg-[#18122B]  p-4 shadow-md h-16">
        <div className="container mx-auto flex justify-between items-center">
          <span className="text-2xl font-bold text-[#A084DC]">Student Info App</span>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="text-xl font-bold text-[#A084DC]">Home</Link>
            </li>
            <li>
              <Link to="/add" className="text-xl font-bold text-[#A084DC]">Add New Student</Link>
            </li>
            <li>
              <Link to="/list" className="text-xl font-bold text-[#A084DC]">View Students</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
