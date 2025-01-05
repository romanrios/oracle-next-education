import { Outlet } from "react-router-dom";
import Cabecera from "../../components/Cabecera/Cabecera";
import Pie from "../../components/Pie/Pie";
import FavoritosProvider from "../../context/FavoritosProvider";

const PaginaBase = () => {
  return (
    <>
      <Cabecera />
      <main>
        <FavoritosProvider>
          <Outlet />
        </FavoritosProvider>
      </main>
      <Pie />
    </>
  );
};

export default PaginaBase;
