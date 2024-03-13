import { Route, Routes } from "react-router";
import ProtectedRoute from "./ProtectedRoute";
import AdminPage from "../pages/Admin";
import NotFoundAuthorizedPage from "../pages/Error/notFoundAuthorizedPage";
import AdminDashboard from "../components/Dashboard/adminDashboard";

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
            <AdminPage />
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
