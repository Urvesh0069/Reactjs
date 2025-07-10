import { Routes, Route } from "react-router-dom";
import Layouts from "../layout/layout";
import Home from "../pages/home";
import Adduser from "../pages/Adduser";
import Edituser from "../pages/Edituser.jsx";

function RouterPage() {
  return (
    <Routes>
      <Route path="/" element={<Layouts />}>
        <Route path="/" element={<Home />} />
        <Route path="/adduser" element={<Adduser />} />
        <Route path="/edituser/:id" element={<Edituser />} />

        {/* Add other routes here */}
      </Route>
    </Routes>
  );
}

export default RouterPage;
