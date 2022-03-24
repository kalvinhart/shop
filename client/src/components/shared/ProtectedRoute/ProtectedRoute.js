import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user || !user.id) return <Navigate to="/login" state={{ from: location }} />;

  return children;
};

export default ProtectedRoute;
