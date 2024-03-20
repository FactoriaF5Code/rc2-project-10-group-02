import "./Card.css";

export const Card = ({title, imageUrl}) => {
  return (
    <div className="card-container">
      <img
        src={imageUrl}
        alt={"imágen de " + title}
        class="card-img"
      />
      <div className="card-text">
        <div className="background"></div>
        <p>{title}</p>
      </div>
    </div>
  );
};
