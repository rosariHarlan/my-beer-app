import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section id="home">
      <h1>Pitcher Perfect</h1>
      <h2>Great beers live here</h2>
      <div className="all">
        <img src="img/all.png" alt="Many beers" />
        <h3>
          <Link to="/all">Meet the Beers</Link>
        </h3>
        <p>
          Our core range of beers. Our all-weather friends. The ones you can get
          all year round. Come rain, come shine, come snow in June.
        </p>
      </div>
      <div className="random">
        <img src="img/random.png" alt="One random beer" />
        <h3>
          <Link to="/random">The Beer Matchmaker</Link>
        </h3>
        <p>
          Don't know what to buy? Are you looking for inspirations? Check out
          this page and be surprised!
        </p>
      </div>
    </section>
  );
};

export default Home;
