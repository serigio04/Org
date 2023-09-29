import "./equipo.css"
import Colaborador from "../Colaborador"

const Equipo = (props) => {
////Destructuracion 
// const { colorPrimario, colorSecundario, titulo } = props.datos

    const colorSecundario = {
        backgroundColor: props.datos.colorFondo
    }
    const colorPrimario = {
        backgroundColor: props.datos.colorDestaque
    }
    const colorTitulo = {
        borderColor: props.datos.colorDestaque
    }
    const { colaboradores, eliminarColaborador  } = props

    return <> { colaboradores.length > 0 &&
        <section className="equipo" style={colorSecundario}>
            <h3 style={colorTitulo}>{props.datos.titulo}</h3>
            <div className="equipo__colaboradores">
                {
                    colaboradores.map( (colaborador, index) => <Colaborador 
                        datos={colaborador} 
                        key={index} 
                        colorPrimario={colorPrimario}
                        eliminarColaborador={eliminarColaborador}
                    />)
                }
            </div>
        </section>
    }</>
}

export default Equipo