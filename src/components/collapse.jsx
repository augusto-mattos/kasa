import arrowDown from "../assets/arrowDown.png"
import arrowUp from "../assets/arrowUp.png"
import { useState } from "react";

function Accordion({ title, content }) {

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="accordion">
      <div className={`accordion-header ${isExpanded ? 'expanded' : ''}`} onClick={toggleAccordion}>
        {title}
        {isExpanded ? <img src={arrowDown} alt="Expanded" /> : <img src={arrowUp} alt="Collapsed" />}
      </div>
      {isExpanded && <div className="accordion-content">{content}</div>}
    </div>
  );
}

function Collapse() {
  return (
    <div className="collapse">
      <Accordion title="Fiabilité" content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." />
      <Accordion title="Respect" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
      <Accordion title="Service" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
      <Accordion title="Sécurité" content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." />
    </div>
  );
}

export default Collapse;
