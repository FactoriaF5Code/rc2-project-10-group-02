import "./Card.css";
import { Link, useLocation } from "react-router-dom";

export const Card = ({ title, imageUrl }) => {
  const location = useLocation();
  const isDetailPage = location.pathname.startsWith("/detail");
  return (
    <div className="card-container">
    {!isDetailPage && (
      <div className="card-text">
        <div className="background"></div>
        <p>{title}</p>
      </div>
    )}
    {isDetailPage ? (
      <img src={imageUrl} alt={"imágen de " + title} className="card-img" />
    ) : (
      <Link to={`/detail/${title}`}>
        <img src={imageUrl} alt={"imágen de " + title} className="card-img" />
      </Link>
    )}
  </div>
  );
};
