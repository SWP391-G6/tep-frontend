import { Route, Routes } from "react-router";
import ProtectedRoute from "./ProtectedRoute";
import HomePage from "../pages/Home/HomePage";
import NotFoundAuthorizedPage from "../pages/Error/notFoundAuthorizedPage";
import TimeshareDetailPage from "../pages/Timeshare/TimeshareDetailPage";
import BookingInformationPage from "../pages/Payment/BookingInformationPage";
import HomeDashboard from "../components/Home/homeDashboard";
import TimeshareDetailDashboard from "../components/Timeshare/timeshareDetailDashboard";

type Props = {
  isAllowed: boolean;
  token: string;
};

function MemberRoutes(props: Props) {
  return (
    <Routes>
      <Route
        element={
          <ProtectedRoute isAllowed={props.isAllowed} token={props.token}>
            <TimeshareDetailPage />
          </ProtectedRoute>
        }
      >
        <Route index element={<HomeDashboard />} />
        <Route path="view_timeshare_detail/:timeshareID">
          <Route index element={<TimeshareDetailDashboard />} />
          <Route
            path="booking_information"
            element={<BookingInformationPage />}
          />
        </Route>
        <Route path="profile"></Route>

        <Route path="*" element={<NotFoundAuthorizedPage />} />
      </Route>
    </Routes>
  );
}

export default MemberRoutes;
