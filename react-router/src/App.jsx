import './assets/css/base/base.css';
import './assets/css/componentes/card.css'
import { Home } from './pages/Home';
import { Sobre } from './pages/Sobre';
import { Page404 } from './pages/Page404';
import { Header } from './components/Header';
import { Post } from './pages/Post';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Sobre />} />
        <Route path="*" element={<Page404 />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;
