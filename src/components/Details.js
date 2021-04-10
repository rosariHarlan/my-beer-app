import { withRouter, Link } from "react-router-dom";
import { getBeer } from "./../BeerAPI";
import { Component } from "react";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oneBeer: [],
    };
  }

  componentDidMount() {
    getBeer(this.props.match.params.id).then((data) =>
      this.setState({ oneBeer: data })
    );
  }

  render() {
    const {
      image_url,
      name,
      tagline,
      first_brewed,
      attenuation_level,
      description,
    } = this.state.oneBeer;
    return (
      <div className="details">
        <img src={image_url} alt={name} />
        <h3>{name}</h3>
        <p>{tagline}</p>
        <p>First brewed: {first_brewed}</p>
        <p>Attenuation level: {attenuation_level}</p>
        <p>{description}</p>
        <span className="arrow">
          <Link to="/"></Link>
        </span>
      </div>
    );
  }
}

export default withRouter(Details);
