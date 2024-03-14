import { Route, Routes } from "react-router";
import ProtectedRoute from "./ProtectedRoute";
import AdminPage from "../pages/Admin";
import NotFoundAuthorizedPage from "../pages/Error/notFoundAuthorizedPage";
import AdminDashboard from "../components/Dashboard/adminDashboard";
import ManageAccountPage from "../pages/Admin/Account/manageAccountPage";
import ManageActiveAccountPage from "../pages/Admin/Account/manageActiveAccountPage";
import ManageInActiveAccountPage from "../pages/Admin/Account/manageInActiveAccountPage";
import ManageTimesharePage from "../pages/Admin/Timeshare/manageTimesharePage";
import ManageBookedTimesharePage from "../pages/Admin/Timeshare/manageBookedTimesharePage";
import ManageActiveTimesharePage from "../pages/Admin/Timeshare/manageActiveTimesharePage";
import ManageExpireTimesharePage from "../pages/Admin/Timeshare/manageExpireTimesharePage";
import ManageServicePackPage from "../pages/Admin/ServicePack/manageServicePackPage";

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

        <Route path="manage_account">
          <Route index element={<ManageAccountPage />} />
          <Route
            path="active_account_list"
            element={<ManageActiveAccountPage />}
          />
          <Route
            path="inactive_account_list"
            element={<ManageInActiveAccountPage />}
          />
        </Route>

        <Route path="manage_timeshare">
          <Route index element={<ManageTimesharePage />} />
          <Route
            path="booked_timeshare_list"
            element={<ManageBookedTimesharePage />}
          />
          <Route
            path="active_timeshare_list"
            element={<ManageActiveTimesharePage />}
          />
          <Route
            path="expired_timeshare_list"
            element={<ManageExpireTimesharePage />}
          />
        </Route>
        <Route path="manage_service_pack">
          <Route index element={<ManageServicePackPage />} />
        </Route>
        <Route path="*" element={<NotFoundAuthorizedPage />} />
      </Route>
    </Routes>
  );
}

export default AdminRoutes;
