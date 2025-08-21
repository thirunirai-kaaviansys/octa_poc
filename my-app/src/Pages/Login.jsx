import { useOktaAuth } from "@okta/okta-react";
import "./Login.css";

function Login() {
  const { oktaAuth, authState } = useOktaAuth();

  if (authState?.isAuthenticated) {
    window.location.replace("/home");
    return null;
  }

  const handleLogin = () => {
    oktaAuth.signInWithRedirect();
  };

  return (
    <div className="login">
      <button onClick={handleLogin}>Login with Okta</button>
    </div>
  );
}

export default Login;
