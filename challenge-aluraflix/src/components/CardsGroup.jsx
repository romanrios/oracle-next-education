import "../css/CardsGroup.css";
import Card from "./Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React, { useContext } from "react";
import DataContext from "../context/context";
import { motion } from "motion/react";

const CardsGroup = (props) => {
  const { data } = useContext(DataContext);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const filteredData = data.filter(
    (item) => item.categoria === props.title.toLowerCase()
  );

  return (
    <motion.section
      className="CardsGroup"
      initial={{ opacity: 0, x: 70 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ amount: 0.6, once: true }}
    >
      <h2 className="CardsGroup_title" style={{ backgroundColor: props.color }}>
        {props.title}
      </h2>
      <Carousel responsive={responsive} infinite={true} itemClass="card-item">
        {filteredData.map((item) => (
          <Card
            key={item.id}
            color={props.color}
            item={item}
            cover={item.cover}
          />
        ))}
      </Carousel>
    </motion.section>
  );
};

export default CardsGroup;
