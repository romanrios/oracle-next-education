import { useState } from 'react'
import './App.css';
import { Header } from './components/Header/Header';
import { Form } from './components/Form/Form';
import { Footer } from './components/Footer/Footer';
import { MyOrg } from './components/MyOrg/MyOrg';
import { Team } from './components/Team/Team';

const teams = [
  {
    title: "Programación",
    colorPrimary: "#57C278",
    colorSecondary: "#D9F7E9",
    members: [
      { name: "Max Power", charge: "Software Developer", img: "https://romanrios.github.io/images/perfil.png" },
      { name: "Jane Smith", charge: "Frontend Developer", img: "./img/w01.jpeg" },
      { name: "Kim Wayne", charge: "Backend Developer", img: "./img/w08.jpeg" },
      { name: "Nico Wild", charge: "Software Engineer", img: "./img/m07.jpeg" }

    ]
  },
  {
    title: "Front End",
    colorPrimary: "#82CFFA",
    colorSecondary: "#E8F8FF",
    members: [
      { name: "Linda Lindsey", charge: "UI/UX Designer", img: "./img/w10.jpeg" },
      { name: "Alice Johnson", charge: "Angular Developer", img: "./img/w02.jpeg" },
      { name: "Bob Brown", charge: "React Developer", img: "./img/m01.jpeg" },
      { name: "Paula Torres", charge: "Frontend Developer", img: "./img/w09.jpeg" }

    ]
  },
  {
    title: "Data Science",
    colorPrimary: "#A6D157",
    colorSecondary: "#F0F8E2",
    members: [
      { name: "Charlie Davis", charge: "Data Analyst", img: "./img/m02.jpeg" },
      { name: "Dana White", charge: "Power Bi Developer", img: "./img/w03.jpeg" },
      { name: "Jack Raven", charge: "Machine Learning Engineer", img: "./img/m08.jpeg" },
      { name: "Gisela Gutiérrez", charge: "Software Developer", img: "./img/w11.jpeg" }

    ]
  },
  {
    title: "Devops",
    colorPrimary: "#E06B69",
    colorSecondary: "#FDE7E8",
    members: [
      { name: "Eve Black", charge: "DevOps Engineer", img: "./img/w04.jpeg" },
      { name: "Frank Green", charge: "Cloud Architect", img: "./img/m03.jpeg" },
      { name: "Tim McDonalds", charge: "Software Developer", img: "./img/m09.jpeg" },
      { name: "Laura Guzmán", charge: "Software Developer", img: "./img/w12.jpeg" }

    ]
  },
  {
    title: "UX y Diseño",
    colorPrimary: "#DB6EBF",
    colorSecondary: "#FAE9F5",
    members: [
      { name: "Grace Lee", charge: "Product Designer", img: "./img/w05.jpeg" },
      { name: "Hank Miller", charge: "Graphic Designer", img: "./img/m04.jpeg" },
      { name: "Julio Rivera", charge: "Software Developer", img: "./img/m10.jpeg" },
      { name: "Mariela López", charge: "Software Developer", img: "./img/w13.jpeg" }
    ]
  },
  {
    title: "Móvil",
    colorPrimary: "#FFBA05",
    colorSecondary: "#FFF5D9",
    members: [
      { name: "Ivy Wilson", charge: "Mobile Developer", img: "./img/w06.jpeg" },
      { name: "Jack Taylor", charge: "iOS Developer", img: "./img/m05.jpeg" },
      { name: "Diego Hernández", charge: "Software Developer", img: "./img/m11.jpeg" }

    ]
  },
  {
    title: "Innovación y Gestión",
    colorPrimary: "#FF8A29",
    colorSecondary: "#FFEEDF",
    members: [
      { name: "Karen Martinez", charge: "Project Manager", img: "./img/w07.jpeg" },
      { name: "Leo Anderson", charge: "Scrum Master", img: "./img/m06.jpeg" },
      { name: "Juan Castillo", charge: "Software Developer", img: "./img/m12.jpeg" }

    ]
  }
];



export const App = () => {

  const [showForm, setShowForm] = useState(false);

  const switchShowForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="App">
      <Header />
      <main>
        {showForm && <Form teams={teams.map(team => team.title)} />}
        <MyOrg switchShowForm={switchShowForm} />

        {teams.map(team => (
          <Team
            key={team.title}
            title={team.title}
            colorPrimary={team.colorPrimary}
            colorSecondary={team.colorSecondary}
            members={team.members}
          />

        ))}
      </main>
      <Footer />
    </div>
  )
}


