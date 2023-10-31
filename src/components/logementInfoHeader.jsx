function LogementInfoHeader({ title, adresse, hostName, hostPicture }) {
  return (
    <div className="logement-info-header">
      <div className="logement-title">
        <h1>{title}</h1>
        <p className="adresse">{adresse}</p>
      </div>

      <div className="host">
        <p className="host-name">{hostName}</p>
        <img className="host-picture" src={hostPicture} alt="host" />
      </div>
    </div>
  );
}

export default LogementInfoHeader;
