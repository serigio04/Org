import "./Colaborador.css"
import { AiOutlineCloseCircle } from "react-icons/ai"

const Colaborador = (props) => {
const { nombre, puesto, foto, id } = props.datos
const { colorPrimario, eliminarColaborador } = props

    return <div className="Colaborador">
        <AiOutlineCloseCircle className="eliminar__colaborador" onClick={() => eliminarColaborador(id)} />
        <div className="Colaborador__encabezado" style={colorPrimario}>
            <img src={foto} alt={nombre}></img>
        </div>
        <div className="Colaborador__info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
        </div>
    </div>
}

export default Colaborador