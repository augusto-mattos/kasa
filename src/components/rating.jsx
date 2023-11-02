import starActive from "../assets/star-active.png";
import starInactive from "../assets/star-inactive.png";

function Rating({ rating }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<img key={i} src={starActive} alt={`starActive-${i}`} />);
    } else {
      stars.push(<img key={i} src={starInactive} alt={`starInactive-${i}`} />);
    }
  }

  return <div className="rating">{stars}</div>;
}

export default Rating;
