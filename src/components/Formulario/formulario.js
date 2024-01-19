import { useState } from "react"
import "./formulario.css"
import CampoTexto from "../campoTexto/campo-texto"
import Listaopciones from "../listaOpciones/listaOpciones"
import Boton from "../boton/boton"

const Formulario = (props) => {

    const [nombre, setNombre] = useState("")
    const [puesto, setPuesto] = useState("")
    const [foto, setFoto] = useState("")
    const [equipo, setEquipo] = useState()

    const {registrarColaborador} = props

    const manejarEnvio = (e) => {
        e.preventDefault();
        let datosAEnviar = {
            nombre,
            puesto,
            foto, 
            equipo
        }
        registrarColaborador(datosAEnviar)
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear colaborador</h2>
            <CampoTexto 
                title="Nombre" 
                placeholder="Ingresar nombre" 
                required 
                valor={nombre} 
                setValor={setNombre}
            />
            <CampoTexto 
                title="Puesto" 
                placeholder="Ingresar puesto"
                required
                valor={puesto} 
                setValor={setPuesto}
            />
            <CampoTexto 
                title="Foto" 
                placeholder="Ingresar enlace de foto"
                valor={foto} 
                setValor={setFoto}
            />
            <Listaopciones
                valor={equipo} 
                setEquipo={setEquipo}
                equipos={props.equipos}
            />
            <Boton>
                Crear
            </Boton>
        </form>
    </section>
}
export default Formulario
