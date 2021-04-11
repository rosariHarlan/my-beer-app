import { Link } from "react-router-dom";

const AllBeers = (props) => {
  return (
    <section id="all">
      <div className="gallery">
        {props.beerData.map((item, i) => (
          <div>
            <div className="product-card" key={i}>
              <img src={item.image_url} alt="beer" />
              <div className="content">
                <h3>{item.name}</h3>
                <p>{item.tagline}</p>
                <p>Created by {item.contributed_by}</p>
                <div className="button">
                  <Link to={`/details/${item._id}`}>Details </Link>
                </div>
              </div>
            </div>
            <hr />
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllBeers;
