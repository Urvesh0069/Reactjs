import { useEffect, useMemo, useState } from "react";
import RoomDetails from "./RoomDetails";
import api from "../api/client";

function RoomList() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [filterBy, setFilterBy] = useState("");

  useEffect(() => {
    let isMounted = true;
    async function loadRooms() {
      try {
        setLoading(true);
        const res = await api.get("/rooms");
        if (isMounted) setRooms(res.data || []);
      } catch {
        if (isMounted) setError("Failed to load rooms");
      } finally {
        if (isMounted) setLoading(false);
      }
    }
    loadRooms();
    return () => {
      isMounted = false;
    };
  }, []);

  const visibleRooms = useMemo(() => {
    let list = [...rooms];
    if (filterBy) {
      const fb = filterBy.toLowerCase();
      list = list.filter((r) => r.type.toLowerCase() === fb);
    }
    if (sortBy === "type") {
      list.sort((a, b) => a.type.localeCompare(b.type));
    } else if (sortBy === "availability") {
      list.sort((a, b) =>
        a.available === b.available ? 0 : a.available ? -1 : 1
      );
    }
    return list;
  }, [rooms, sortBy, filterBy]);

  return (
    <div className="container py-4">
      <div className="d-flex align-items-center justify-content-between mb-3">
        <h2 className="m-0">Rooms</h2>
        <div className="d-flex gap-2">
          <select
            className="form-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="">Sort by</option>
            <option value="type">Room Type</option>
            <option value="availability">Availability</option>
          </select>
          <select
            className="form-select"
            value={filterBy}
            onChange={(e) => setFilterBy(e.target.value)}
          >
            <option value="">Filter</option>
            <option value="Deluxe">Deluxe</option>
            <option value="Suite">Suite</option>
            <option value="Standard">Standard</option>
          </select>
        </div>
      </div>

      {loading && <div>Loading rooms...</div>}
      {error && <div className="alert alert-danger">{error}</div>}

      <div className="row g-3">
        {visibleRooms.map((room) => (
          <div className="col-sm-6 col-lg-4" key={room.id}>
            <RoomDetails room={room} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default RoomList;
