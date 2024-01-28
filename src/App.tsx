import React, { Suspense } from "react";
import "./App.css";
import { ErrorBoundary } from "./components/Error/errorBoundary";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "./GlobalStyles";
import HomePage from "./pages/Home/HomePage";
import TimeshareDetailPage from "./pages/TimeshareDetail/TimeshareDetailPage";

const NotFoundPage = React.lazy(() => import("./pages/Error/notFoundPage"));

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<h1>Đang load nè!!!!</h1>}>
        <BrowserRouter>
          <CssBaseline />
          <GlobalStyles />
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>

          <Routes>
            <Route path="/posting/R111111" element={<TimeshareDetailPage />} />
          </Routes> 
        </BrowserRouter>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
