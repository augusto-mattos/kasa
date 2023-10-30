import data from "../data/annonces.json";
import { Link } from "react-router-dom";

function Cards() {
  return (
    <div className="gallery-container">
      {data.map((logement) => (
        <div key={logement.id} id={logement.id} className="logement-card">
            <Link to={`/logement/${logement.id}`}>
            <img
              src={logement.cover}
              alt="card de logement"
              className="logement-cover"
            />
            <div className="overlay-card">
              <h3>{logement.title}</h3>
            </div>
        </Link>
          </div>
      ))}
    </div>
  );
}

export default Cards;
