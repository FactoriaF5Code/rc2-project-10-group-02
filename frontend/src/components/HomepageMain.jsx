import { Card } from "./Card";
import "./HomepageMain.css";
import jsonData from "../data/data.json";

export const HomepageMain = () => {
  return (
    <main>
      <section className="cards-container">
        {jsonData.map((card, index) => (
          <Card key={index} title={card.title} imageUrl={card.imageUrl} />
        ))}
      </section>
    </main>
  );
};
