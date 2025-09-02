import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import api from "../api/client";

function ReservationForm() {
  const location = useLocation();
  const [rooms, setRooms] = useState([]);
  const [roomId, setRoomId] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guest, setGuest] = useState("");
  const [statusMsg, setStatusMsg] = useState("");

  useEffect(() => {
    let isMounted = true;
    async function loadRooms() {
      try {
        const res = await api.get("/rooms");
        if (isMounted) setRooms(res.data || []);
      } catch {
        // noop UI-only
      }
    }
    loadRooms();
    const incomingId = location.state && location.state.roomId;
    if (incomingId) {
      setRoomId(String(incomingId));
    }
    return () => {
      isMounted = false;
    };
  }, [location.state]);

  async function handleCreateReservation(e) {
    e.preventDefault();
    setStatusMsg("");
    try {
      await api.post("/reservations", {
        roomId: Number(roomId),
        guest,
        checkIn,
        checkOut,
        status: "confirmed",
      });
      setStatusMsg("Reservation created");
      setRoomId("");
      setGuest("");
      setCheckIn("");
      setCheckOut("");
    } catch {
      setStatusMsg("Failed to create reservation");
    }
  }

  return (
    <div className="container py-4">
      <h2 className="mb-3">Make a Reservation</h2>
      <form className="row g-3" onSubmit={handleCreateReservation}>
        <div className="col-md-6">
          <label className="form-label">Room</label>
          <select
            className="form-select"
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
            required
          >
            <option value="" disabled>
              Choose a room
            </option>
            {rooms.map((r) => (
              <option key={r.id} value={r.id} disabled={!r.available}>
                {r.number} - {r.type} {r.available ? "" : "(Booked)"}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-6">
          <label className="form-label">Room Type (optional)</label>
          <select className="form-select" defaultValue="">
            <option value="">Any</option>
            <option value="Deluxe">Deluxe</option>
            <option value="Suite">Suite</option>
            <option value="Standard">Standard</option>
          </select>
        </div>
        <div className="col-md-3">
          <label className="form-label">Adults</label>
          <select className="form-select" defaultValue="2">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <div className="col-md-3">
          <label className="form-label">Children</label>
          <select className="form-select" defaultValue="0">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <div className="col-md-6">
          <label className="form-label">Guest name</label>
          <input
            className="form-control"
            value={guest}
            onChange={(e) => setGuest(e.target.value)}
            placeholder="Guest"
            required
          />
        </div>
        <div className="col-12">
          <label className="form-label">Preferences (optional)</label>
          <div className="d-flex flex-wrap gap-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="prefBreakfast"
              />
              <label className="form-check-label" htmlFor="prefBreakfast">
                Breakfast
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="prefSeaView"
              />
              <label className="form-check-label" htmlFor="prefSeaView">
                Sea view
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="prefExtraBed"
              />
              <label className="form-check-label" htmlFor="prefExtraBed">
                Extra bed
              </label>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <label className="form-label">Check-in</label>
          <input
            type="date"
            className="form-control"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            required
          />
        </div>
        <div className="col-md-3">
          <label className="form-label">Check-out</label>
          <input
            type="date"
            className="form-control"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            required
          />
        </div>
        <div className="col-12 d-flex gap-2">
          <button type="submit" className="btn btn-primary">
            Reserve
          </button>
          {statusMsg && (
            <span className="align-self-center text-muted">{statusMsg}</span>
          )}
        </div>
      </form>
    </div>
  );
}

export default ReservationForm;
