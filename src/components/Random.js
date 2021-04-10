import { Link } from "react-router-dom";

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
    <div className="random-beer">
      <img src={image_url} alt={name} />
      <h3>{name}</h3>
      <p>{tagline}</p>
      <p>First brewed: {first_brewed}</p>
      <p>Attenuation level: {attenuation_level}</p>
      <p>{description}</p>
      <span className="arrow"></span>
      <Link to="/"></Link>
    </div>
  );
};

export default Random;
