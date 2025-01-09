import "./css/App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import NewVideo from "./components/NewVideo";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<MainSection />} />
          <Route path="/newvideo" element={<NewVideo />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
