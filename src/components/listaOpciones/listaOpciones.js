import "./listaOpciones.css"
import { Select, InputLabel, MenuItem, FormControl} from "@mui/material"

const Listaopciones = (props) => {
//metodo map -> nombreArreglo.map( (equipo, index) => {
//    return <option key={index}>{equipo}</option>
//})
//se debe usar la propiedad key={index} para que busque cada valor 

    const manejarCambio = (e) => {
        props.setEquipo(e.target.value)
    }

    return <FormControl className="listaOpciones">
        <InputLabel id="label-for-select">Equipos</InputLabel >
        {/* map es un valor que unicamente se puede usar en los arrays, llama al valor seleccionado */}
        <Select
            id="select-team"
            // value={props.valor}
            onChange={manejarCambio}
            labelId="label-for-select"
            label="Equipos"
            autoWidth
            
        >
            {/* Se usan estos elementos para simular un placeholder en el select, asi la opcion seleccionar equipos no es una posible eleccion */}
            {/* <MenuItem value="" defaultValue="" hidden>Seleccionar equipo</MenuItem> */}
            { props.equipos.map((equipo, index) => <MenuItem key={index} value={equipo}>{equipo}</MenuItem>) }
        </Select>
    </FormControl>
}

export default Listaopciones