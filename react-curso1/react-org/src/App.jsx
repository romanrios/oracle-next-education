import { useState } from 'react'
import './App.css';
import { Header } from './assets/components/Header/Header';
import { Form } from './assets/components/Form/Form';
import { Footer } from './assets/components/Footer/Footer';
import { MyOrg } from './assets/components/MyOrg/MyOrg';

export const App = () => {

  return (
    <div className="App">
      <Header />
      <main>
        <Form />
        <MyOrg />
      </main>
      <Footer />
    </div>
  )
}


