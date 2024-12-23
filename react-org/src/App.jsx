import { useState } from 'react'
import './App.css';
import { Header } from './components/Header/Header';
import { Form } from './components/Form/Form';
import { Footer } from './components/Footer/Footer';
import { MyOrg } from './components/MyOrg/MyOrg';
import { Team } from './components/Team/Team';

export const App = () => {

  const [showForm, setShowForm] = useState(true);

  const switchShowForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="App">
      <Header />
      <main>
        {showForm && <Form />}
        <MyOrg switchShowForm={switchShowForm} />
        <Team />
      </main>
      <Footer />
    </div>
  )
}


