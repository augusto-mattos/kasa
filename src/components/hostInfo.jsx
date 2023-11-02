function HostInfo({ hostName, hostPicture }) {
    return (
        <div className="host">
          <p className="host-name">{hostName}</p>
          <img className="host-picture" src={hostPicture} alt="host" />
        </div>
    );
  }
  
  export default HostInfo;