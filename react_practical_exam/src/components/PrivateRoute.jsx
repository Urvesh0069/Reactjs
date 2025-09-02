import { Navigate } from "react-router-dom";

// Presentational placeholder: always allows access unless `requireAuth` is true
function PrivateRoute({ children, requireAuth = false }) {
  const isAuthenticated = Boolean(localStorage.getItem("authUser"));
  if (requireAuth && !isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

export default PrivateRoute;
