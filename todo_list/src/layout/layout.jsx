import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar';

function Layouts() {
  return (
    <div className="w-full">
      <div className="w-[100%] h-[10%] fixed" style={{ boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)' }}>
        <Navbar />
      </div>
      <div className=" top-[12%] left-[13%] w-[100%] h-[90%] overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default Layouts