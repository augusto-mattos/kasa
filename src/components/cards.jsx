import data from "../data/annonces.json";

function Cards() {
  return (
    <div className="gallery-container">
      {data.map((logement) => (
        <div key={logement.id} className="logement-card">
          <img
            src={logement.cover}
            alt="card de logement"
            className="logement-cover"
          />
          <div className="overlay-card">
            <h3>{logement.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
