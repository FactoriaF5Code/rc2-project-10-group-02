import { Card } from "./Card";
import './HomepageMain.css';

export const HomepageMain = () => {
  const cardData = [
    { title: "Canchas de Pádel", imageUrl: "../public/foto01.png" },
    { title: "Canchas de Fútbol", imageUrl: "../public/foto02.png" },
    { title: "Gimnasio", imageUrl: "../public/foto03.png" },
    { title: "Piscina", imageUrl: "../public/foto04.png" },
    { title: "Canchas de Tenis", imageUrl: "../public/foto05.png" },
    { title: "Sala Polivalente", imageUrl: "../public/foto06.png" },
    { title: "Zona Relax", imageUrl: "../public/foto07.png" },
    { title: "Recepción", imageUrl: "../public/foto08.png" },
    { title: "Tienda", imageUrl: "../public/foto09.png" },
    { title: "Cafetería", imageUrl: "../public/foto10.png" },
  ];
  return (
    <main>
      <section className="cards-container">
        {cardData.map((card, index) => (
          <Card key={index} title={card.title} imageUrl={card.imageUrl} />
        ))}
      </section>
    </main>
  );
};
