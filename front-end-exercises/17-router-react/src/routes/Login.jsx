import Dashboard from "./Dashboard";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div>
      <h1>Clique no botão para ser redirecionado para a dashboard!</h1>
      <button>
        <Link to="/dashboard"> Dashboard</Link>
      </button>
    </div>
  );
};

export default Login;
