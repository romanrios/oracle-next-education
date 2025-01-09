import "../css/MainSection.css";
import Banner from "../components/Banner";
import CardsGroup from "./CardsGroup";
import DataContext from "../context/context";
import { useContext } from "react";

const MainSection = () => {
  const { loading, error } = useContext(DataContext);

  if (loading) return <p className="MainSection_loader"></p>;

  if (error)
    return <p className="MainSection_message">Error: {error.message}</p>;

  return (
    <>
      <Banner />
      <section className="MainSection">
        <CardsGroup title="FRONT END" color="var(--frontend)" />
        <CardsGroup title="BACK END" color="var(--backend)" />
        <CardsGroup title="INNOVACIÓN Y GESTIÓN" color="var(--innovacion)" />
      </section>
    </>
  );
};

export default MainSection;
