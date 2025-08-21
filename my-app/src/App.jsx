import { Routes, Route } from "react-router-dom";
import { Security, LoginCallback } from "@okta/okta-react";
import oktaAuth from "./oktaConfig";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Unauthorized from "./Pages/Unauthorized";
import SecureRoute from "./SecureRoute"; // import your custom component
import { useNavigate } from "react-router-dom";
import { toRelativeUrl } from "@okta/okta-auth-js";

function App() {
  const navigate = useNavigate();

  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    navigate(toRelativeUrl(originalUri || "/", window.location.origin), { replace: true });
  };

  return (
    <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login/callback" element={<LoginCallback />} />
        <Route
          path="/home"
          element={
            <SecureRoute>
              <Home />
            </SecureRoute>
          }
        />
        <Route path="/unauthorized" element={<Unauthorized />} />
      </Routes>
    </Security>
  );
}

export default App;
