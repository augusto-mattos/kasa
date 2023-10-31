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

function Accordion({ data }) {
  return (
    <div className="collapse">
      {data.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
}

export default Accordion;
