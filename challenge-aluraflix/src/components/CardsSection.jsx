import "../css/CardsSection.css";
import CardsGroup from "./CardsGroup";

const CardsSection = () => {
  return (
    <section className="CardsSection">
      <CardsGroup title="FRONT END" color="var(--frontend)" />
      <CardsGroup title="BACK END" color="var(--backend)" />
      <CardsGroup title="INNOVACIÓN Y GESTIÓN" color="var(--innovacion)" />
    </section>
  );
};

export default CardsSection;
