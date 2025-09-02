import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../api/client";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleLogin(e) {
    e.preventDefault();
    setError("");
    if (!email || !password) {
      setError("Email and password required");
      return;
    }
    try {
      setSubmitting(true);
      const res = await api.get(`/users`, { params: { email, password } });
      const user = Array.isArray(res.data) ? res.data[0] : null;
      if (!user) {
        setError("Invalid credentials");
        return;
      }
      localStorage.setItem("authUser", JSON.stringify(user));
      navigate("/reservations");
    } catch {
      setError("Login failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="container py-5" style={{ maxWidth: 480 }}>
      <h3 className="mb-4 text-center">Login</h3>
      <div className="card shadow-sm">
        <div className="card-body">
          {error && <div className="alert alert-danger">{error}</div>}
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              className="btn btn-primary w-100"
              type="submit"
              disabled={submitting}
            >
              {submitting ? "Signing in..." : "Sign in"}
            </button>
          </form>
          <div className="text-center mt-3">
            <small>
              Don't have an account? <Link to="/register">Register</Link>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
