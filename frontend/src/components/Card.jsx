import "./Card.css";

export const Card = ({title, imageUrl}) => {
  return (
    <div class="card-container">
      <img
        src={imageUrl}
        alt={"imágen de " + title}
        class="card-img"
      />
      <div class="card-text">
        <div className="background"></div>
        <p>{title}</p>
      </div>
    </div>
  );
};
