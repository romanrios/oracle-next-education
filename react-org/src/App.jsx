import { useState } from 'react'
import './App.css';
import { Header } from './assets/components/Header/Header';
import { Form } from './assets/components/Form/Form';
import { Footer } from './assets/components/Footer/Footer';
import { MyOrg } from './assets/components/MyOrg/MyOrg';

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
      </main>
      <Footer />
    </div>
  )
}


