import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthentication } from "../../../hooks/shared/useAuthentication/useAuthentication";
import Spinner from "../Spinner/Spinner";

const ProtectedRoute = () => {
  const location = useLocation();
  const { loading, user, isAuthenticated } = useAuthentication();

  if (loading) return <Spinner/>

  if (!isAuthenticated || !user) return <Navigate to="/login" state={{ from: location }} />;

  return <Outlet />;
};

export default ProtectedRoute;
