import Inicio from "./pages/Inicio";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
