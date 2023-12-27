// import logo from './logo.svg';
import { useState, useEffect } from 'react';
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
  // Usamos un estado inicializador para cargar los colaboradores desde localStorage
  const [colaboradores, setColaboradores] = useState(() => {
    const storedColaboradores = localStorage.getItem('colaboradores');
    return storedColaboradores ? JSON.parse(storedColaboradores) : [];
  });

  useEffect(() => {
    localStorage.setItem('colaboradores', JSON.stringify(colaboradores));
  }, [colaboradores]);

const registrarColaborador = (colaborador) => {
  colaborador.id = uuid();
  //spread operator, crea una copia de lo que existe y agrega un nuevo elemento al arreglo
  setColaboradores([...colaboradores, colaborador]);
  console.log('Nuevo colaborador registrado:', colaborador);
};

  //Ternario --> condicion ? seMuestra : noSeMuestra
  //condicion && se muestra 
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
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