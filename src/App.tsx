import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { ErrorBoundary } from "./components/Error/errorBoundary";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "./GlobalStyles";
import HomePage from "./pages/Home/HomePage";
import { ROUTE_PATH } from "./configs";
import TimeshareDetailPage from "./pages/Timeshare/TimeshareDetailPage";
import ScrollToTop from "./utils/ScrollToTop";
import LoginPage from "./pages/Login/LoginPage";
import RegisterPage from "./pages/Register/RegisterPage";
import "react-toastify/dist/ReactToastify.css";
import AdminRoutes from "./routes/AdminRoutes";
import { USER_ROLE_KEY, USER_TOKEN_KEY } from "./constant";
import MemberRoutes from "./routes/MemberRoutes";
import HomeDashboard from "./components/Dashboard/homeDashboard";
import TimeshareDetailDashboard from "./components/Dashboard/timeshareDetailDashboard";

const NotFoundPage = React.lazy(() => import("./pages/Error/notFoundPage"));

function App() {
  const token = JSON.parse(localStorage.getItem(USER_TOKEN_KEY)!);
  const role = JSON.parse(localStorage.getItem(USER_ROLE_KEY)!);
  return (
    <ErrorBoundary>
      <Suspense fallback={<h1>Đang load nè!!!!</h1>}>
        <BrowserRouter>
          <ScrollToTop />
          <CssBaseline />
          <GlobalStyles />
          <Routes>
            <Route path="/" element={<HomePage />}>
              <Route index element={<HomeDashboard />} />
            </Route>
            <Route
              path="view_timeshare_detail/:timeshareID"
              element={<TimeshareDetailPage />}
            >
              <Route index element={<TimeshareDetailDashboard />} />
            </Route>
            <Route
              path={ROUTE_PATH.ADMIN}
              element={
                <AdminRoutes
                  token={token}
                  isAllowed={role === "admin" ? true : false}
                />
              }
            />
            <Route
              path={ROUTE_PATH.MEMBER}
              element={
                <MemberRoutes
                  token={token}
                  isAllowed={role === "member" ? true : false}
                />
              }
            />

            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />

            <Route path={ROUTE_PATH.NOT_FOUND} element={<NotFoundPage />} />
            <Route path={ROUTE_PATH.ERROR} element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
