import "../css/CardsGroup.css";
import Card from "./Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CardsGroup = (props) => {
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
  return (
    <section className="CardsGroup">
      <h2 className="CardsGroup_title" style={{ backgroundColor: props.color }}>
        {props.title}
      </h2>
      <Carousel responsive={responsive} infinite={true} itemClass="card-item">
        <Card color={props.color} />
        <Card color={props.color} />
        <Card color={props.color} />
      </Carousel>
    </section>
  );
};

export default CardsGroup;
