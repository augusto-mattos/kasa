import { useState } from "react";
import arrowSlider from "../assets/arrow-slider.png";

function Carrousel({ logement }) {

  const logementPictures = logement.pictures;

  const [currentId, setCurrentId] = useState(0);

  const nextSlide = () => {
    setCurrentId((currentId + 1) % logementPictures.length);
  };

  const prevSlide = () => {
    setCurrentId(
      (currentId - 1 + logementPictures.length) % logementPictures.length
    );
  };

  return (
    <div className="caroussel">
      {logementPictures.length > 1 ? (
        <>
          <div className="caroussel-container">
            <img
              src={logementPictures[currentId]}
              alt={`Photographie ${currentId + 1} du logement ${logement.id}`}
            />
            <p className="img-counter">
              {`${currentId + 1}/${logementPictures.length}`}
            </p>
            <button className="previous-img" onClick={prevSlide}>
              <img src={arrowSlider} alt="photographie précédente" />
            </button>
            <button className="next-img" onClick={nextSlide}>
              <img src={arrowSlider} alt="prochaine photographie" />
            </button>
          </div>
        </>
      ) : (
        <div className="caroussel-container">
          <img
            src={logementPictures[currentId]}
            alt={`Photographie ${currentId + 1} du logement ${logement.id}`}
          />
        </div>
      )}
    </div>
  );
}

export default Carrousel;
