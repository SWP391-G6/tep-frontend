import React, { Suspense } from "react";
import "./App.css";
import { ErrorBoundary } from "./components/Error/errorBoundary";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";

const NotFoundPage = React.lazy(() => import("./pages/Error/notFoundPage"));

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<h1>Đang load nè!!!!</h1>}>
        <BrowserRouter>
          <CssBaseline />
          <Routes>
            <Route></Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
