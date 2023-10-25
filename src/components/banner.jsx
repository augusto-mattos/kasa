import imgBannerAccueil from "../assets/banner-accueil.png";

function Banner() {
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
}

export default Banner;
