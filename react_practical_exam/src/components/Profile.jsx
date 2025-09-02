import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  const user = useMemo(() => {
    try {
      const raw = localStorage.getItem("authUser");
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }, []);

  function handleLogout() {
    localStorage.removeItem("authUser");
    navigate("/login");
  }

  if (!user) {
    return <div className="container py-4">No user info.</div>;
  }

  return (
    <div className="container py-4" style={{ maxWidth: 640 }}>
      <h3 className="mb-3">Profile</h3>
      <div className="card">
        <div className="card-body">
          <div className="row g-3">
            <div className="col-12 col-md-6">
              <div className="fw-semibold">Name</div>
              <div>{user.name}</div>
            </div>
            <div className="col-12 col-md-6">
              <div className="fw-semibold">Email</div>
              <div>{user.email}</div>
            </div>
          </div>
          <button
            className="btn btn-outline-danger mt-3"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
