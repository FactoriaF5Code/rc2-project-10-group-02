import React from "react";
import { useParams } from "react-router-dom";
import './Detailpage.css'
import jsonData from '../data/data.json'
import { Card } from "../components/Card";

const DetailPage = () => {
  const { title } = useParams();
  const card = jsonData.find(card => card.title === title);

  if (!card) {
    return <div>No se encontró la tarjeta</div>
  }

  const {imageUrl, description} = card;
  return (
    <main>
      <Card title={title} imageUrl={imageUrl} />
      <div className="main-right">
        <h1>{title}</h1>
        <p>{description}</p>
        <button className="reserva">Reservar</button>
      </div>
    </main>
  );
};

export default DetailPage;
