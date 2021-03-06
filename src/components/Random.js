import { Link } from "react-router-dom";
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
        <p>
          First brewed: <span>{first_brewed}</span>
        </p>
        <p>
          Attenuation level: <span>{attenuation_level}</span>
        </p>
        <p>{description}</p>
        <div className="arrow-container">
          <span className="arrow">
            <Link to="/">
              <img src={arrow} alt="arrow" />
            </Link>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Random;
