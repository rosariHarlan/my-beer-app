import { Link } from "react-router-dom";
import NavBar from "./Navbar";
import arrow from "./../arrow.png";

const Random = (props) => {
  const {
    image_url,
    name,
    tagline,
    first_brewed,
    attenuation_level,
    description,
  } = props.randomData;

  return (
    <section id="random">
      <div className="details">
        <img src={image_url} alt={name} />
        <h3>{name}</h3>
        <p>{tagline}</p>
        <p>First brewed: {first_brewed}</p>
        <p>Attenuation level: {attenuation_level}</p>
        <p>{description}</p>
        <span className="arrow">
          <Link to="/">
            <img src={arrow} alt="arrow" />
          </Link>
        </span>
        <NavBar />
      </div>
    </section>
  );
};

export default Random;
