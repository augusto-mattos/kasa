import { useLocation } from "react-router-dom";
import data from "../../data/annonces.json";
import Carrousel from "../../components/carrousel";
import LogementInfoHeader from "../../components/logementInfoHeader";
import Tags from "../../components/tags";

function FicheLogement() {
  const location = useLocation();
  const currentUrl = location.pathname;
  const urlLogementId = currentUrl.split("/")[2];
  const logement = data.find((item) => item.id === urlLogementId);
  
  const title = logement.title;
  const adresse = logement.location;
  
  const hostInfo = logement.host;
  const hostName = hostInfo.name;
  const hostPicture = hostInfo.picture;
  
  const tagsListe = logement.tags;

  return (
    <div className="fiche-logement-container">
      <Carrousel logement={logement} />
      <LogementInfoHeader
        title={title}
        adresse={adresse}
        hostName={hostName}
        hostPicture={hostPicture}
      />
      <Tags tagsListe={tagsListe}/>
    </div>
  );
}

export default FicheLogement;
