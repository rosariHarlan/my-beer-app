import { withRouter, Link } from "react-router-dom";
import { getBeer } from "./../BeerAPI";
import { Component } from "react";
import arrow from "./../arrow.png";

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
      <section id="details">
        <div className="details">
          <img src={image_url} alt={name} />
          <h3>{name}</h3>
          <p>{tagline}</p>
          <p>
            First brewed: <span>{first_brewed}</span>
          </p>
          <p>
            Attenuation level: <span>{attenuation_level}</span>
          </p>
          <p>{description}</p>
          <span className="arrow">
            <Link to="/all">
              <img src={arrow} alt="arrow" />
            </Link>
          </span>
        </div>
      </section>
    );
  }
}

export default withRouter(Details);
