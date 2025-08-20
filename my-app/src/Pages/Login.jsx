import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="login">
      <button onClick={() => navigate("/home")}>Login</button>
    </div>
  );
}

export default Login;
