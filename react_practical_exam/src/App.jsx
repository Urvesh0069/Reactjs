import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import RoomList from "./components/RoomList";
import ReservationForm from "./components/ReservationForm";
import ReservationList from "./components/ReservationList";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Navigate to="/rooms" replace />} />
        <Route path="/rooms" element={<RoomList />} />
        <Route path="/reserve" element={<ReservationForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/profile"
          element={
            <PrivateRoute requireAuth={true}>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="/reservations"
          element={
            <PrivateRoute requireAuth={false}>
              <ReservationList />
            </PrivateRoute>
          }
        />
        <Route
          path="*"
          element={<div className="container py-4">Not Found</div>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
