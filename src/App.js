import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AllBeers from "./components/AllBeers";

function App() {
  return (
    <Router>
      <div>
        <div>
          <Home />
        </div>
        <Switch>
          <Route path="/all">
            <AllBeers />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
