import { useLocation } from "react-router-dom";
import data from "../../data/annonces.json";
import Carrousel from "../../components/carrousel";
import LogementInfoHeader from "../../components/logementInfoHeader";
import Tags from "../../components/tags";
import HostInfo from "../../components/hostInfo";
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
      <Carrousel logement={logement} />
      <div className="infos-logement">
        <div className="logement-header">
          <LogementInfoHeader
            title={logement.title}
            adresse={logement.location}
          />
          <Tags tagsListe={logement.tags} />
        </div>
        <div className="host-and-rating">
          <HostInfo hostName={hostInfo.name} hostPicture={hostInfo.picture} />
          <Rating rating={logement.rating} />
        </div>
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
              )),
            },
          ]}
        />
      </div>
    </div>
  );
}

export default FicheLogement;
