import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../api/client";

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function handleRegister(e) {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (!name || !email || !password || !confirmPassword) {
      setError("All fields are required");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      setSubmitting(true);
      const existing = await api.get(`/users`, { params: { email } });
      if (Array.isArray(existing.data) && existing.data.length > 0) {
        setError("Email already registered");
        return;
      }
      await api.post(`/users`, { name, email, password });
      setSuccess("Registration successful. Redirecting to login...");
      setTimeout(() => navigate("/login"), 800);
    } catch {
      setError("Registration failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="container py-5" style={{ maxWidth: 520 }}>
      <h3 className="mb-4 text-center">Create Account</h3>
      <div className="card shadow-sm">
        <div className="card-body">
          {error && <div className="alert alert-danger">{error}</div>}
          {success && <div className="alert alert-success">{success}</div>}
          <form onSubmit={handleRegister}>
            <div className="row g-3">
              <div className="col-12 col-md-6">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Create password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Repeat password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>
            <button
              className="btn btn-primary w-100 mt-3"
              type="submit"
              disabled={submitting}
            >
              {submitting ? "Registering..." : "Register"}
            </button>
          </form>
          <div className="text-center mt-3">
            <small>
              Already have an account? <Link to="/login">Login</Link>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
