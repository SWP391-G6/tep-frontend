import { Route, Routes } from "react-router";
import ProtectedRoute from "./ProtectedRoute";
import NotFoundAuthorizedPage from "../pages/Error/notFoundAuthorizedPage";
import TimeshareDetailPage from "../pages/Timeshare/TimeshareDetailPage";
import BookingInformationPage from "../pages/Payment/BookingInformationPage";
import TimeshareDetailDashboard from "../components/Dashboard/timeshareDetailDashboard";
import HomeDashboard from "../components/Dashboard/homeDashboard";
import UserProfilePage from "../pages/Member/MyProfilePage";
import MyTimesharePage from "../pages/Member/MyTimesharePage";
import MyExchangeRequestPage from "../pages/Member/MyExchangeRequestPage";
import ProfileDashboardPage from "../pages/Member/ProfileDashboardPage";
import BookingHistoryPage from "../pages/Member/BookingHistoryPage";

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
        <Route path="profile">
          <Route index element={<ProfileDashboardPage />} />
          <Route path="my_profile" element={<UserProfilePage />} />
          <Route path="my_timeshare" element={<MyTimesharePage />} />
          <Route path="my_exchange_request" element={<MyExchangeRequestPage />} />
          <Route path="my_booking_history" element={<BookingHistoryPage />} />
        </Route>
        <Route path="*" element={<NotFoundAuthorizedPage />} />
      </Route>
    </Routes>
  );
}

export default MemberRoutes;
