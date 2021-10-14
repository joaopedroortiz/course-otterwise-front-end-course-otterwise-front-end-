import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Dashboard from "./routes/Dashboard";
import Login from "./routes/Login";
import JokeDetails from "./routes/JokeDetail";

// Criar a navegação entre os componentes a seguir, utilizar a lib react-router-dom

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />

        <Route path="/dashboard" component={Dashboard} />

        <Route path="/jokesdatails" component={JokeDetails} />
      </Switch>
    </Router>
  );
};

export default App;
