import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="px-6 py-4 flex justify-between items-center shadow-md" style={{ backgroundColor: '#3C3D37', color: '#ECDFCC' }}>
      <div className="text-2xl font-bold">
        <Link to="/" style={{ color: '#ECDFCC' }}>MyLogo</Link>
      </div>

      <ul className="hidden md:flex gap-6 text-lg">
        <li className="cursor-pointer" style={{ color: '#ECDFCC' }}>
          <Link to="/" style={{ color: '#ECDFCC' }}>Home</Link>
        </li>
        <li className="cursor-pointer" style={{ color: '#ECDFCC' }}>
          <Link to="/adduser" style={{ color: '#ECDFCC' }}>AddUser</Link>
        </li>
        <li className="cursor-pointer" style={{ color: '#ECDFCC' }}>
          <Link to="/edituser" style={{ color: '#ECDFCC' }}>EditUser</Link>
        </li>
      </ul>

      <div className="md:hidden">
        <button className="text-2xl" style={{ color: '#ECDFCC' }}>&#9776;</button>
      </div>
    </nav>
  );
};

export default Navbar;
