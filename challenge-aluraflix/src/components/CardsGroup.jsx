import "../css/CardsGroup.css";
import React, { useContext } from "react";
import DataContext from "../context/context";
import Card from "./Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { motion } from "motion/react";
import { useState } from "react";
import { deleteData, editData } from "../services/services";
import {
  showSuccessAlert,
  showErrorAlert,
  showConfirmationAlert,
  showEdit,
} from "../utils/alerts";
import { handlePlay } from "../utils/videoUtils";

const CardsGroup = (props) => {
  const { data, removeVideo, editVideo } = useContext(DataContext);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });

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

  const handleMouseDown = (e) => {
    setStartPos({ x: e.clientX, y: e.clientY });
  };

  const handleDelete = async (videoId) => {
    try {
      const isConfirmed = await showConfirmationAlert(
        "¿Estás seguro de que deseas eliminar este video? Esta acción no se puede deshacer."
      );
      if (!isConfirmed) {
        return; // Si el usuario cancela, salir
      }
      if (videoId < 17) {
        showErrorAlert(
          "El administrador no permite la eliminación de este video."
        );
        return; // Salir de la función
      }
      await deleteData(videoId); // Elimina el video desde la API
      removeVideo(videoId); // Elimina el video del estado global
      showSuccessAlert("El video ha sido eliminado correctamente.");
    } catch (error) {
      showErrorAlert(
        "Hubo un problema al eliminar el video. Inténtalo nuevamente."
      );
    }
  };

  const handleEdit = async (item) => {
    try {
      const result = await showEdit(item);

      if (!result.isConfirmed) {
        return; // Si el usuario cancela, salir
      }
      if (item.id < 17) {
        showErrorAlert("El administrador no permite la edición de este video.");
        return; // Salir de la función
      }
      const updatedItem = {
        ...item,
        titulo: result.value.titulo,
        categoria: result.value.categoria,
        imagen: result.value.imagen,
        video: result.value.video,
        descripcion: result.value.descripcion,
      };
      await editData(updatedItem);
      editVideo(updatedItem);
      showSuccessAlert("El video ha sido editado correctamente.");
    } catch (error) {
      showErrorAlert(
        "Hubo un problema al editar el video. Inténtalo nuevamente. Error: " +
          error
      );
    }
  };

  const filteredData = data.filter(
    (item) => item.categoria.toLowerCase() === props.title.toLowerCase()
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
            item={item}
            color={props.color}
            key={item.id}
            id={item.id}
            imagen={item.imagen}
            video={item.video}
            handlePlay={handlePlay}
            handleMouseDown={handleMouseDown}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            startPos={startPos}
          />
        ))}
      </Carousel>
    </motion.section>
  );
};

export default CardsGroup;
