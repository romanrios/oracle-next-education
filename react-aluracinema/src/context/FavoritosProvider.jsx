import { useState, createContext, useContext } from "react";

export const FavoritosContext = createContext();

FavoritosContext.displayName = "Favoritos";

export default function FavoritosProvider({ children }) {
  const [favorito, setFavorito] = useState([]);

  return (
    <FavoritosContext.Provider value={{ favorito, setFavorito }}>
      {children}
    </FavoritosContext.Provider>
  );
}

export function useFavoritosContext() {
  const context = useContext(FavoritosContext);
  if (!context) {
    throw new Error("useFavoritosContext must be used within a FavoritosProvider");
  }
  const { favorito, setFavorito } = context;

  function agregarFavorito(nuevoFavorito) {
    const favoritoRepetido = favorito.some(
      (item) => item.id === nuevoFavorito.id
    );
    let nuevaLista = [...favorito];
    if (!favoritoRepetido) {
      nuevaLista.push(nuevoFavorito);
      return setFavorito(nuevaLista);
    }
    nuevaLista = favorito.filter((item) => item.id !== nuevoFavorito.id);
    return setFavorito(nuevaLista);
  }
  return { favorito, agregarFavorito };
}
