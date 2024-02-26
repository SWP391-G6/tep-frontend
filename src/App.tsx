import React, { Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { ErrorBoundary } from "./components/Error/errorBoundary";
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
import LoginPage from "./pages/Login/LoginPage";
import RegisterPage from "./pages/Register/RegisterPage";
import AccountManagePage from "./pages/Account/AccountManagePage";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
const NotFoundPage = React.lazy(() => import("./pages/Error/notFoundPage"));

function isAuthenticated() {
  // Check if the user is logged in by verifying the presence of a token in localStorage
  const token = localStorage.getItem("token");
  console.log(token)
  return !!token; // Return true if the token exists, false otherwise
  
}

function hasAdminRole() {
  // Check if the user has the admin role by verifying the presence of a role in localStorage
  const token = localStorage.getItem("token");
  const role = token ? JSON.parse(token).token.role : null;
  console.log(role,'authen');
  return role === "admin"; // Return true if the role is 'admin', false otherwise
}

function hasUserRole() {
  // Check if the user has the admin role by verifying the presence of a role in localStorage
  const token = localStorage.getItem("token");
  const role = token ? JSON.parse(token).token.role : null;
  console.log(role,'authen');
  return role === "user"; // Return true if the role is 'admin', false otherwise
}


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
            {isAuthenticated() && hasUserRole() && (
            <Route path="/user/profile" element={<MemberPage />} />
            )}

            <Route path="/user/posting" element={<UserPostingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            {/* Protected admin route */}
            {isAuthenticated() && hasAdminRole() && (
              <Route path="/admin/account" element={<AccountManagePage />} />
            )}

            <Route
              path="/user/exchange_request"
              element={<UserRequestPage />}
            />
            <Route path={ROUTE_PATH.NOT_FOUND} element={<NotFoundPage />} />
            <Route path={ROUTE_PATH.ERROR} element={<NotFoundPage />} />
          </Routes>
          <ToastContainer />
        </BrowserRouter>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;