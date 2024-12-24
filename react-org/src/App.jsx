import { useState } from 'react'
import './App.css';
import { Header } from './components/Header/Header';
import { Form } from './components/Form/Form';
import { Footer } from './components/Footer/Footer';
import { MyOrg } from './components/MyOrg/MyOrg';
import { Team } from './components/Team/Team';
import hexToRgba from 'hex-to-rgba';
import { v4 as uuidv4 } from 'uuid';

const initialTeams = [
  {
    id: uuidv4(),
    title: "Programación",
    color: "#57C278",
    members: [
      { id: uuidv4(), name: "Max Power", charge: "Software Developer", img: "https://romanrios.github.io/images/perfil.png" },
      { id: uuidv4(), name: "Jane Smith", charge: "Frontend Developer", img: "./img/w01.jpeg" },
      { id: uuidv4(), name: "Kim Wayne", charge: "Backend Developer", img: "./img/w08.jpeg" },
      { id: uuidv4(), name: "Nico Wild", charge: "Software Engineer", img: "./img/m07.jpeg" }
    ]
  },
  {
    id: uuidv4(),
    title: "Front End",
    color: "#82CFFA",
    members: [
      { id: uuidv4(), name: "Linda Lindsey", charge: "UI/UX Designer", img: "./img/w10.jpeg" },
      { id: uuidv4(), name: "Alice Johnson", charge: "Angular Developer", img: "./img/w02.jpeg" },
      { id: uuidv4(), name: "Bob Brown", charge: "React Developer", img: "./img/m01.jpeg" },
      { id: uuidv4(), name: "Paula Torres", charge: "Frontend Developer", img: "./img/w09.jpeg" }
    ]
  },
  {
    id: uuidv4(),
    title: "Data Science",
    color: "#A6D157",
    members: [
      { id: uuidv4(), name: "Charlie Davis", charge: "Data Analyst", img: "./img/m02.jpeg" },
      { id: uuidv4(), name: "Dana White", charge: "Power Bi Developer", img: "./img/w03.jpeg" },
      { id: uuidv4(), name: "Jack Raven", charge: "Machine Learning Engineer", img: "./img/m08.jpeg" },
      { id: uuidv4(), name: "Gisela Gutiérrez", charge: "Software Developer", img: "./img/w11.jpeg" }
    ]
  },
  {
    id: uuidv4(),
    title: "Devops",
    color: "#E06B69",
    members: [
      { id: uuidv4(), name: "Eve Black", charge: "DevOps Engineer", img: "./img/w04.jpeg" },
      { id: uuidv4(), name: "Frank Green", charge: "Cloud Architect", img: "./img/m03.jpeg" },
      { id: uuidv4(), name: "Tim McDonalds", charge: "Software Developer", img: "./img/m09.jpeg" },
      { id: uuidv4(), name: "Laura Guzmán", charge: "Software Developer", img: "./img/w12.jpeg" }
    ]
  },
  {
    id: uuidv4(),
    title: "UX y Diseño",
    color: "#DB6EBF",
    members: [
      { id: uuidv4(), name: "Grace Lee", charge: "Product Designer", img: "./img/w05.jpeg" },
      { id: uuidv4(), name: "Hank Miller", charge: "Graphic Designer", img: "./img/m04.jpeg" },
      { id: uuidv4(), name: "Julio Rivera", charge: "Software Developer", img: "./img/m10.jpeg" },
      { id: uuidv4(), name: "Mariela López", charge: "Software Developer", img: "./img/w13.jpeg" }
    ]
  },
  {
    id: uuidv4(),
    title: "Móvil",
    color: "#FFBA05",
    members: [
      { id: uuidv4(), name: "Ivy Wilson", charge: "Mobile Developer", img: "./img/w06.jpeg" },
      { id: uuidv4(), name: "Jack Taylor", charge: "iOS Developer", img: "./img/m05.jpeg" },
      { id: uuidv4(), name: "Diego Hernández", charge: "Software Developer", img: "./img/m11.jpeg" }
    ]
  },
  {
    id: uuidv4(),
    title: "Innovación y Gestión",
    color: "#FF8A29",
    members: [
      { id: uuidv4(), name: "Karen Martinez", charge: "Project Manager", img: "./img/w07.jpeg" },
      { id: uuidv4(), name: "Leo Anderson", charge: "Scrum Master", img: "./img/m06.jpeg" },
      { id: uuidv4(), name: "Juan Castillo", charge: "Software Developer", img: "./img/m12.jpeg" }
    ]
  }
];

export const App = () => {

  const [showForm, setShowForm] = useState(false);
  const [teams, setTeams] = useState(initialTeams);

  const switchShowForm = () => {
    setShowForm(!showForm);
  };

  const addMember = (formData) => {
    const newMember = {
      id: uuidv4(),
      name: formData.name,
      charge: formData.charge,
      img: formData.img
    };

    const updatedTeams = teams.map(team => {
      if (team.title === formData.team) {
        return {
          ...team,
          members: [...team.members, newMember]
        };
      }
      return team;
    });

    setTeams(updatedTeams);
    // switchShowForm();
  };

  const addTeam = (formData) => {
    const newTeam = {
      id: uuidv4(),
      title: formData.title,
      color: formData.color,
      members: []
    };

    setTeams([...teams, newTeam]);
  }

  const removeMember = (memberId) => {
    const updatedTeams = teams.map(team => {
      return {
        ...team,
        members: team.members.filter(member => member.id !== memberId)
      };
    });
    setTeams(updatedTeams);
  };

  const changeColor = (teamId, newColor) => {
    const updatedTeams = teams.map(team => {
      if (team.id === teamId) {
        return {
          ...team,
          color: newColor,
          colorSecondary: hexToRgba(newColor, 0.2)
        };
      }
      return team;
    });

    setTeams(updatedTeams);
  };

  return (
    <div className="App">
      <Header />
      <main>
        {showForm && <Form teams={teams.map(team => team.title)} addMember={addMember} addTeam={addTeam} />}
        <MyOrg switchShowForm={switchShowForm} />

        {teams.map((team) => (
          // Cada Equipo se muestra solo si contiene Miembros
          team.members.length > 0 && (
            <Team
              id={team.id}
              key={team.id}
              title={team.title}
              color={team.color}
              members={team.members}
              removeMember={removeMember}
              changeColor={changeColor}
            />
          )
        ))}
      </main>
      <Footer />
    </div>
  )
}


