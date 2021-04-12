//const Details = () => {
//   let { id } = useParams();
//   const [oneBeer, setOneBeer] = useState(null);
//   useEffect(() => {
//     fetch("https://ih-beers-api2.herokuapp.com/beers/" + id).then((res) =>
//       setOneBeer(res.data)
//     );
//   }, []);

//   return (
//     <section id="details">
//       <div className="details">
//         <img src={oneBeer.image_url} alt={oneBeer.name} />
//         <h3>{oneBeer.name}</h3>
//         <p>{oneBeer.tagline}</p>
//         <p>
//           First brewed: <span>{oneBeer.first_brewed}</span>
//         </p>
//         <p>
//           Attenuation level: <span>{oneBeer.attenuation_level}</span>
//         </p>
//         <p>{oneBeer.description}</p>
//         <span className="arrow">
//           <Link to="/all">
//             <img src={arrow} alt="arrow" />
//           </Link>
//         </span>
//       </div>

//       <Navbar />
//     </section>
//   );
// };

// export default Details;
