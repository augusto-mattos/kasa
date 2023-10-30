import data from "../data/annonces.json";
import { Link } from "react-router-dom";

function Cards() {
  return (
    <div className="gallery-container">
      {data.map((logement) => (
        <Link to={`/logement/${logement.id}`}>
          <div key={logement.id} id={logement.id} className="logement-card">
            <img
              src={logement.cover}
              alt="card de logement"
              className="logement-cover"
            />
            <div className="overlay-card">
              <h3>{logement.title}</h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Cards;
