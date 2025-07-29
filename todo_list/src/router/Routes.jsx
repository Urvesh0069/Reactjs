import { Routes, Route } from "react-router-dom";
import Layouts from "../layout/layout";
import Home from "../pages/home";
import Adduser from "../pages/Adduser";
import Edituser from "../pages/Edituser";

function RouterPage() {
  return (
    <Routes>
      <Route path="/" element={<Layouts />}>
        <Route path="/" element={<Home />} />
        <Route path="/adduser" element={<Adduser />} />
        <Route path="/edituser" element={<Edituser />} />
        <Route path="/edituser/:id" element={<Edituser />} />
      </Route>
    </Routes>
  );
}

export default RouterPage;
