import { jokesList } from "../data";
import { Link } from "react-router-dom";
const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <button>
        <Link to="/">Logout</Link>
      </button>
      <div>
        <ul>
          {jokesList.map((item) => (
            <li>{item.title}</li>
            // Extra: se o usuário clicar em um item deve ser redirecionado para os detalhes do item selecionado
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
