import { Route, Routes } from "react-router";
import ProtectedRoute from "./ProtectedRoute";
import AdminDashboard from "../pages/Admin";
import NotFoundAuthorizedPage from "../pages/Error/notFoundAuthorizedPage";

type Props = {
  isAllowed: boolean;
  token: string;
};

function AdminRoutes(props: Props) {
  return (
    <Routes>
      <Route
        element={
          <ProtectedRoute isAllowed={props.isAllowed} token={props.token}>
            <AdminDashboard />
          </ProtectedRoute>
        }
      >
        <Route index element={<AdminDashboard />} />
        <Route path="*" element={<NotFoundAuthorizedPage />} />
      </Route>
    </Routes>
  );
}

export default AdminRoutes;
