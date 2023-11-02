import { useLocation } from "react-router-dom";
import data from "../../data/annonces.json";
import Carrousel from "../../components/carrousel";
import LogementInfoHeader from "../../components/logementInfoHeader";
import Tags from "../../components/tags";
import Rating from "../../components/rating";
import Accordion from "../../components/accordion";

function FicheLogement() {
  const location = useLocation();
  const currentUrl = location.pathname;
  const urlLogementId = currentUrl.split("/")[2];
  const logement = data.find((item) => item.id === urlLogementId);

  const hostInfo = logement.host;

  return (
    <div className="fiche-logement-container">
      <div className="logement-header">
        <Carrousel logement={logement} />
        <LogementInfoHeader
          title={logement.title}
          adresse={logement.location}
          hostName={hostInfo.name}
          hostPicture={hostInfo.picture}
        />
      </div>
      <div className="tags-and-rating">
        <Tags tagsListe={logement.tags} />
        <Rating rating={logement.rating} />
      </div>
      <div className="description-container">
        <Accordion
          data={[
            {
              title: "Description",
              content: logement.description,
            },
          ]}
        />
        <Accordion
          data={[
            {
              title: "Équipements",
              content: logement.equipments.map((item, index) => (
                <p key={index}>{item}</p>
              ))
            }
          ]}
        />
      </div>
    </div>
  );
}

export default FicheLogement;
