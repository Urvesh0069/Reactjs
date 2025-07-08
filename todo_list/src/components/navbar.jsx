import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <div className="text-2xl font-bold">
        <Link to="/" className="hover:text-yellow-300">MyLogo</Link>
      </div>

      <ul className="hidden md:flex gap-6 text-lg">
        <li className="hover:text-yellow-300 cursor-pointer">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-yellow-300 cursor-pointer">
          <Link to="/adduser">AddUser</Link>
        </li>
        <li className="hover:text-yellow-300 cursor-pointer">
          <Link to="/edituser">EditUser</Link>
        </li>
      </ul>

      <div className="md:hidden">
        <button className="text-white text-2xl">&#9776;</button>
      </div>
    </nav>
  );
};

export default Navbar;
