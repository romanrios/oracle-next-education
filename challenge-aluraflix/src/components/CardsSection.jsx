import "../css/CardsSection.css";
import CardsGroup from "./CardsGroup";
import DataContext from "../context/context";
import { useContext } from "react";

const CardsSection = () => {
  const { loading, error } = useContext(DataContext);

  if (loading) return <p className="CardsSection_loader"></p>;

  if (error)
    return <p className="CardsSection_message">Error: {error.message}</p>;

  return (
    <section className="CardsSection">
      <CardsGroup title="FRONT END" color="var(--frontend)" />
      <CardsGroup title="BACK END" color="var(--backend)" />
      <CardsGroup title="INNOVACIÓN Y GESTIÓN" color="var(--innovacion)" />
    </section>
  );
};

export default CardsSection;
