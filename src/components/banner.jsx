import { useLocation } from "react-router-dom";
import imgBannerAccueil from "../assets/banner-accueil.png";
import imgBannerAbout from "../assets/banner-about.png";

function Banner() {
  const location = useLocation();

  if (location.pathname === "/") {
    return (
      <div className="banner">
        <img
          className="banner-image"
          src={imgBannerAccueil}
          alt="banner de la page d'accueil"
        />
        <div className="banner-opacity"></div>
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
    );
  } else if (location.pathname === "/about") {
    return (
      <div className="banner">
        <img
          className="banner-image"
          src={imgBannerAbout}
          alt="banner de la page à propos"
        />
        <div className="banner-opacity"></div>
      </div>
    );
  } else {
    return null;
  }
}

export default Banner;
