import { Routes, Route } from "react-router";

import ProtectedRoute from "../components/shared/ProtectedRoute/ProtectedRoute";
import AdminPage from "../components/AdminPage/AdminPage";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <AdminPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AdminRoutes;
