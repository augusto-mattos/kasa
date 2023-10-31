import { useLocation } from "react-router-dom";
import data from "../../data/annonces.json";
import Carrousel from "../../components/carrousel";

function FicheLogement() {
  const location = useLocation();
  const currentUrl = location.pathname;
  const urlLogementId = currentUrl.split("/")[2];
  const logement = data.find((item) => item.id === urlLogementId);

  const title = logement.title;

  return (
    <>
      <Carrousel logement={logement} />
      <h1>{title}</h1>
    </>
  );
}

export default FicheLogement;
