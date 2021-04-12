import "./App.scss";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AllBeers from "./components/AllBeers";
import { Component } from "react";
import Details from "./components/Details";
import { getAllBeers, getRandomBeer } from "./BeerAPI";
import Random from "./components/Random";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allBeers: [],
      randomBeer: [],
    };
  }

  componentDidMount() {
    getAllBeers().then((data) => this.setState({ allBeers: data }));
    getRandomBeer().then((data) => this.setState({ randomBeer: data }));
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/details/:id">
              <Details />
            </Route>
            <Route path="/random">
              <Random randomData={this.state.randomBeer} />
            </Route>
            <Route path="/all">
              <AllBeers beerData={this.state.allBeers} />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
