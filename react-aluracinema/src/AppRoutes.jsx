import { HashRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio/Inicio";
import Favoritos from "./pages/Favoritos/Favoritos";
import Cabecera from "./components/Cabecera/Cabecera";
import Pie from "./components/Pie/Pie";
import FavoritosProvider from "./context/FavoritosProvider";
import Player from "./pages/Player/Player";
import NotFound from "./pages/NotFound/NotFound";
import PaginaBase from "./pages/PaginaBase/PaginaBase";

const AppRoutes = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<PaginaBase />}>
          <Route index element={<Inicio />} />
          <Route path="favoritos" element={<Favoritos />} />
          <Route path="player/:id" element={<Player />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default AppRoutes;
