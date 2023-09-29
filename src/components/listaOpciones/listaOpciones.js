import "./listaOpciones.css"

const Listaopciones = (props) => {
//metodo map -> nombreArreglo.map( (equipo, index) => {
//    return <option key={index}>{equipo}</option>
//})
//se debe usar la propiedad key={index} para que busque cada valor 

    const manejarCambio = (e) => {
        props.setEquipo(e.target.value)
    }

    return <div className="listaOpciones">
        <label>Equipos</label>
        {/* map es un valor que unicamente se puede usar en los arrays, llama al valor seleccionado */}
        <select value={props.valor} onChange={manejarCambio}>
            {/* Se usan estos elementos para simular un placeholder en el select, asi la opcion seleccionar equipos no es una posible eleccion */}
            <option value="" defaultValue="" hidden>Seleccionar equipo</option>
            { props.equipos.map((equipo, index) => <option key={index} value={equipo}>{equipo}</option>) }
        </select>
    </div>
}

export default Listaopciones