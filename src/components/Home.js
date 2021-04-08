import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="all">
        <img src="img/all.png" alt="Many beers" />
        <h2>
          <Link to="/all">All Beers</Link>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a,
          eleifend vitae varius venenatis.
        </p>
      </div>
      <div className="random">
        <img src="img/random.png" alt="One random beer" />
        <h2>Random Beer</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a,
          eleifend vitae varius venenatis.
        </p>
      </div>
    </div>
  );
};

export default Home;
