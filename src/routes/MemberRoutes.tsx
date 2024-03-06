import { Route, Routes } from "react-router";
import ProtectedRoute from "./ProtectedRoute";
import HomePage from "../pages/Home/HomePage";
import NotFoundAuthorizedPage from "../pages/Error/notFoundAuthorizedPage";

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
          <HomePage />
        </ProtectedRoute>
      }
    >
      <Route index element={<HomePage />} />
      <Route path="*" element={<NotFoundAuthorizedPage />} />
    </Route>
  </Routes>
  );
}

export default MemberRoutes;
