import "./App.scss";
import Home from "./components/Home";
import { Switch, Route, withRouter } from "react-router-dom";
import AllBeers from "./components/AllBeers";
import { Component } from "react";
import Details from "./components/Details";
import { getAllBeers, getRandomBeer } from "./BeerAPI";
import Random from "./components/Random";
import Navbar from "./components/Navbar";

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
      <div>
        <main>
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
        </main>
        <footer>
          {this.props.location.pathname === "/" ? "" : <Navbar />}
        </footer>
      </div>
    );
  }
}

export default withRouter(App);
