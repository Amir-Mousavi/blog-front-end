import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";
import Signup from "../pages/auth/signup";
import Signin from "../pages/auth/signin";
import Home from "../pages/Home";

export default function AppRoute({ children }: any) {
  return (
    <Router>
      <>
        {children}
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </>
    </Router>
  );
}
