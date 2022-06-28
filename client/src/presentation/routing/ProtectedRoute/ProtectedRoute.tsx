import { Navigate, Outlet, useLocation } from "react-router-dom";

import { useAuthState } from "../../common/hooks/useAuthState";

import Spinner from "../../common/components/Spinner/Spinner";

const ProtectedRoute = () => {
  const location = useLocation();
  const { loading, user, isAuthenticated } = useAuthState();

  if (loading) return <Spinner />;

  if (!isAuthenticated || !user)
    return <Navigate to="/login" state={{ from: location }} />;

  return <Outlet />;
};

export default ProtectedRoute;
