import React, { Suspense } from "react";
import "./App.css";
import { ErrorBoundary } from "./components/Error/errorBoundary";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "./GlobalStyles";
import HomePage from "./pages/Home/HomePage";
import { ROUTE_PATH } from "./configs";
import TimeshareDetailPage from "./pages/Timeshare/TimeshareDetailPage";
import MemberPage from "./pages/UserProfile/MemberPage";
import UserRequestPage from "./pages/UserRequest/UserRequestPage";
import ScrollToTop from "./utils/ScrollToTop";
import UserPostingPage from "./pages/User/UserProfilePage";
import BookingInformationPage from "./pages/Payment/BookingInformationPage";

const NotFoundPage = React.lazy(() => import("./pages/Error/notFoundPage"));

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<h1>Đang load nè!!!!</h1>}>
        <BrowserRouter>
          <ScrollToTop />
          <CssBaseline />
          <GlobalStyles />
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route
              index
              path="/view_timeshare_detail/:timeshareID"
              element={<TimeshareDetailPage />}
            />
            <Route
              path="booking_information"
              element={<BookingInformationPage />}
            />
            <Route path="/user/profile" element={<MemberPage />} />
            <Route path="/user/posting" element={<UserPostingPage />} />
            <Route
              path="/user/exchange_request"
              element={<UserRequestPage />}
            />
            <Route path={ROUTE_PATH.NOT_FOUND} element={<NotFoundPage />} />
            <Route path={ROUTE_PATH.ERROR} element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
