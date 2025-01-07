import "./css/App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import CardsSection from "./components/CardsSection";

function App() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <CardsSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
