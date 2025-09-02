import { Navigate } from "react-router-dom";

// Presentational placeholder: always allows access unless `requireAuth` is true
function PrivateRoute({ children, requireAuth = false }) {
  const isAuthenticated = false; // placeholder for future auth state
  if (requireAuth && !isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return children;
}

export default PrivateRoute;
