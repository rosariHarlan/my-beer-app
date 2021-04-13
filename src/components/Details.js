import { useParams, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import arrow from "./../arrow.png";
import axios from "axios";

const Details = () => {
  let { id } = useParams();
  const [oneBeer, setOneBeer] = useState(null);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/" + id)
      .then((res) => setOneBeer(res.data));
  }, [id]);

  if (!oneBeer) {
    return <p>Loading...</p>;
  }

  const {
    image_url,
    name,
    tagline,
    first_brewed,
    attenuation_level,
    description,
  } = oneBeer;

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
        <div className="arrow-container">
          <span className="arrow">
            <Link to="/all">
              <img src={arrow} alt="arrow" />
            </Link>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Details;
