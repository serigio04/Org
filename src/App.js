// import logo from './logo.svg';
import { useState } from 'react';
import { v4 as uuid } from 'uuid'
import './App.css';
import Header from './components/header/header';
import Formulario from "./components/Formulario/formulario"
import MiOrg from "./components/miorg/MiOrg"
import Equipo from './components/Equipo';
import Footer from './components/Footer';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false)
    //lista de equipos
  const [equipos, setEquipos] = useState([
    {
      titulo: "Programacion",
      colorDestaque: "#57C278",
      colorFondo: "#D9F7E9"
    }, //0
    {
      titulo:"Front end",
      colorDestaque: "#82CFFA",
      colorFondo: "#E8F8FF"
    }, //1
    {
      titulo: "Data Science",
      colorDestaque: "#A6D157",
      colorFondo: "#F0F8E2"
    },//2
    {
      titulo: "Devops",
      colorDestaque: "#E06B69",
      colorFondo: "#FDE7E8"
    },//3
    {
      titulo: "UX/UI",
      colorDestaque: "#DB6EBF",
      colorFondo: "#FAE9F5"
    },//4
    {
      titulo: "Movil",
      colorDestaque: "#FFBA05",
      colorFondo: "#FFF5D9"
    },//5
    {
      titulo: "Innovacion y gestion",
      colorDestaque: "#FF8A29",
      colorFondo: "#FFEEDF"
    }//6
  ])
  console.log(setEquipos)
  const [colaboradores, setColaboradores] = useState([{
    id: uuid(),
    equipo: "Front end",
    foto: "https://e1.pxfuel.com/desktop-wallpaper/818/321/desktop-wallpaper-nino-nakano-icons-di-2021-nino-aesthetic-thumbnail.jpg",
    nombre: "Nino Nakano", 
    puesto: "Chef jefa"
  },
  {
    id: uuid(),
    equipo: "Programacion",
    foto: "https://64.media.tumblr.com/bd85175ce97452bb985b6416f74684e5/tumblr_pcdsv8wLK71xpfzvqo3_400.jpg",
    nombre: "Zero two", 
    puesto: "Parasito - Pistilo"
  },
  {
    id: uuid(),
    equipo: "Innovacion y gestion",
    foto: "https://64.media.tumblr.com/bd85175ce97452bb985b6416f74684e5/tumblr_pcdsv8wLK71xpfzvqo3_400.jpg",
    nombre: "Zero two", 
    puesto: "Parasito - Pistilo"
  },
])

  //Ternario --> condicion ? seMuestra : noSeMuestra
  //condicion && se muestra 
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  //Registrar nuevo colaborador
  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador: ", colaborador)
    //spread operator, crea una copia de lo que existe y agrega un nuevo elemento al arreglo
    setColaboradores([...colaboradores, colaborador])
  }

  //eliminar colaborador
  const eliminarColaborador = (id) => {
    const nuevoColaborador = colaboradores.filter((colaborador) => colaborador.id !== id)
    setColaboradores(nuevoColaborador)
  }
// // actualziar color 
//   const actualizarColor = (color,id) => {
//     const equipoColorActualizado = equipos.map((equipo) => {
//       if (equipo.id === id){
//         equipo.colorFondo = color
//       }

//       return equipo
//     })
//     setEquipos(equipoColorActualizado)
//   }

  return (
    <div>
      <Header />
      {/* se exporta un props para importar la constante/funcion para el archivo donde hará el cambio */}
      <MiOrg cambiarMostrar={cambiarMostrar}/> 
      {/* { mostrarFormulario === true ? <Formulario /> : <></>}
      { mostrarFormulario ? <Formulario /> : <></>} */}
      { 
        mostrarFormulario && <Formulario 
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
        />
      }
      
      { // el argumento puede ser cualquiera pero debe tener sentido
        equipos.map((equipo) => <Equipo 
          datos={equipo} 
          key={equipo.titulo}
          colaboradores={colaboradores.filter( colaborador => colaborador.equipo === equipo.titulo)}
          eliminarColaborador={eliminarColaborador}
          // actualizarColor={actualizarColor}
        />)
      }  

      <Footer />
    </div>
  );
}

export default App;