import React from "react";
import { Link, useParams } from "react-router-dom";
import "../Styles/Detailpage.css";
import jsonData from "../data/data.json";
import { Card } from "../components/Card";
import HeaderGuest from "../components/HeaderGuest";

const DetailPage = () => {
  const { title } = useParams();
  const card = jsonData.find((card) => card.title === title);

  if (!card) {
    return <div>No se encontró la tarjeta</div>;
  }

  const { imageUrl, description } = card;
  return (
    <>
      <HeaderGuest />
      <div className="detailPage-main">
        <div className="main-left">
          <Card title={title} imageUrl={imageUrl} />
        </div>
        <div className="main-right">
          <h1>{title}</h1>
          <p>{description}</p>
          <Link to="/reservas" className="btn-container">
            <button>Reservar</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default DetailPage;
