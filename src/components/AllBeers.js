import React from "react";
import axios from "axios";

class All extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: [],
    };
  }
  componentDidMount() {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then((result) => {
      const name = result.data;
      this.setState({ name });
    });
  }

  render() {
    return (
      <div>
        {this.state.name.map((item, i) => (
          <p key={i}>{item.name}</p>
        ))}
      </div>
    );
  }
}

export default All;
