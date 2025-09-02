import { useEffect, useMemo, useState } from "react";
import api from "../api/client";

function ReservationList() {
  const [reservations, setReservations] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [editId, setEditId] = useState(null);
  const [editGuest, setEditGuest] = useState("");
  const [editCheckIn, setEditCheckIn] = useState("");
  const [editCheckOut, setEditCheckOut] = useState("");
  const [editStatus, setEditStatus] = useState("confirmed");

  async function loadData() {
    try {
      setLoading(true);
      const [r1, r2] = await Promise.all([
        api.get("/reservations"),
        api.get("/rooms"),
      ]);
      setReservations(r1.data || []);
      setRooms(r2.data || []);
      setError("");
    } catch {
      setError("Failed to load reservations");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  const roomIdToNumber = useMemo(() => {
    const map = new Map();
    // Normalize map keys to strings to match reservation.roomId when looked up
    rooms.forEach((r) => map.set(String(r.id), r.number));
    return map;
  }, [rooms]);

  async function handleDelete(id) {
    try {
      await api.delete(`/reservations/${id}`);
      setReservations((prev) => prev.filter((r) => r.id !== id));
    } catch {
      // noop UI-only
    }
  }

  function startEdit(r) {
    setEditId(r.id);
    setEditGuest(r.guest);
    setEditCheckIn(r.checkIn);
    setEditCheckOut(r.checkOut);
    setEditStatus(r.status);
  }

  function cancelEdit() {
    setEditId(null);
  }

  async function saveEdit() {
    const payload = {
      guest: editGuest,
      checkIn: editCheckIn,
      checkOut: editCheckOut,
      status: editStatus,
    };
    try {
      const res = await api.patch(`/reservations/${editId}`, payload);
      setReservations((prev) =>
        prev.map((it) => (it.id === editId ? res.data : it))
      );
      setEditId(null);
    } catch {
      // noop UI-only
    }
  }

  return (
    <div className="container py-4">
      <h2 className="mb-3">Reservations</h2>
      {loading && <div>Loading...</div>}
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="table-responsive">
        <table className="table table-striped align-middle">
          <thead>
            <tr>
              <th>#</th>
              <th>Room</th>
              <th>Guest</th>
              <th>Check-in</th>
              <th>Check-out</th>
              <th>Status</th>
              <th className="text-end">Actions</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((r, idx) => (
              <tr key={r.id}>
                <td>{idx + 1}</td>
                {/* Use string key to handle type differences between room ids in rooms (string) and reservations (number) */}
                <td>{roomIdToNumber.get(String(r.roomId)) || r.roomId}</td>
                {editId === r.id ? (
                  <>
                    <td>
                      <input
                        className="form-control"
                        value={editGuest}
                        onChange={(e) => setEditGuest(e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        className="form-control"
                        value={editCheckIn}
                        onChange={(e) => setEditCheckIn(e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        className="form-control"
                        value={editCheckOut}
                        onChange={(e) => setEditCheckOut(e.target.value)}
                      />
                    </td>
                    <td>
                      <select
                        className="form-select"
                        value={editStatus}
                        onChange={(e) => setEditStatus(e.target.value)}
                      >
                        <option value="confirmed">confirmed</option>
                        <option value="cancelled">cancelled</option>
                      </select>
                    </td>
                    <td className="text-end">
                      <div className="btn-group">
                        <button
                          className="btn btn-sm btn-success"
                          onClick={saveEdit}
                        >
                          Save
                        </button>
                        <button
                          className="btn btn-sm btn-secondary"
                          onClick={cancelEdit}
                        >
                          Close
                        </button>
                      </div>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{r.guest}</td>
                    <td>{r.checkIn}</td>
                    <td>{r.checkOut}</td>
                    <td>
                      <span
                        className={`badge ${
                          r.status === "confirmed"
                            ? "bg-success"
                            : "bg-secondary"
                        }`}
                      >
                        {r.status}
                      </span>
                    </td>
                    <td className="text-end">
                      <div className="btn-group">
                        <button
                          className="btn btn-sm btn-outline-primary"
                          onClick={() => startEdit(r)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => handleDelete(r.id)}
                        >
                          Cancel
                        </button>
                      </div>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ReservationList;
