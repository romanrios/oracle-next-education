import React, { createContext, useState, useEffect } from "react";
import { fetchData } from "../services/services";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadApiData = async () => {
      try {
        const apiData = await fetchData("/");
        const sortedData = apiData.sort((a, b) => b.id - a.id);
        setData(sortedData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    loadApiData();
  }, []);

  // Función para agregar un video al estado global
  const addVideo = (newVideo) => {
    setData((prevData) => [...prevData, newVideo]);
  };

  // Función para quitar un video del estado global
  const removeVideo = (videoId) => {
    setData((prevData) => prevData.filter((video) => video.id !== videoId));
  };

  // Función para editar un video en el estado global
  const editVideo = (updatedVideo) => {
    setData((prevData) =>
      prevData.map((video) =>
        video.id === updatedVideo.id ? updatedVideo : video
      )
    );
  };

  return (
    <DataContext.Provider
      value={{ data, loading, error, addVideo, removeVideo, editVideo }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
