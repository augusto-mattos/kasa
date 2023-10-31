import { useLocation } from "react-router-dom";
import data from "../../data/annonces.json";
import Carrousel from "../../components/carrousel";

function FicheLogement() {
  const location = useLocation();
  const currentUrl = location.pathname;
  const urlLogementId = currentUrl.split("/")[2];
  const logement = data.find((item) => item.id === urlLogementId);

  const title = logement.title;
  const adresse = logement.location;
  const tagsListe = logement.tags;

  return (
    <div className="fiche-logement-container">
      <Carrousel logement={logement} />

      <div className="title-and-host">
        <div className="logement-title">
          <h1>{title}</h1>
          <p className="adresse">{adresse}</p>
        </div>
        <div className="host">picture</div>
      </div>

      <div className="tags-container">
        {tagsListe.map((tag, index) => (
          <span className="tag" key={index}>
            {tag}
          </span>
        ))}
      </div>
      
    </div>
  );
}

export default FicheLogement;
