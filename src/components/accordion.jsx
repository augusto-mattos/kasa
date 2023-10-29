import { useState } from "react";
import arrow from "../assets/arrow.png";

function AccordionItem({ title, content }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div className="accordion-header" onClick={toggleAccordion}>
        <h3>{title}</h3>
        <img
          src={arrow}
          alt="Collapsed"
          className={`arrow ${isExpanded ? "rotate" : ""}`}
        ></img>
      </div>
      <div className={`accordion-content ${isExpanded ? "expanded" : ""}`}>
        <p>{content}</p>
      </div>
    </>
  );
}

function Accordion() {
  return (
    <div className="collapse">
      <AccordionItem
        title="Fiabilité"
        content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
      />
      <AccordionItem
        title="Respect"
        content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
      />
      <AccordionItem
        title="Service"
        content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
      />
      <AccordionItem
        title="Sécurité"
        content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
      />
    </div>
  );
}

export default Accordion;
