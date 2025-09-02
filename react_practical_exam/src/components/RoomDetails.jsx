import { useNavigate } from "react-router-dom";

function RoomDetails({ room }) {
  if (!room) return null;
  const navigate = useNavigate();
  return (
    <div className="card h-100">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-start mb-2">
          <h5 className="card-title mb-0">Room {room.number}</h5>
          <span
            className={`badge ${
              room.available ? "bg-success" : "bg-secondary"
            }`}
          >
            {room.available ? "Available" : "Booked"}
          </span>
        </div>
        <p className="card-text mb-1">
          <strong>Type:</strong> {room.type}
        </p>
        <p className="card-text mb-3">
          <strong>Price:</strong> ${room.price}/night
        </p>
        <button
          className="btn btn-primary w-100"
          disabled={!room.available}
          onClick={() => navigate("/reserve", { state: { roomId: room.id } })}
        >
          Reserve
        </button>
      </div>
    </div>
  );
}

export default RoomDetails;
