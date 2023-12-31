import "./campoTexto.css"
import { TextField } from '@mui/material';

const CampoTexto = (props) => {
    const PlaceholderMod = `${props.placeholder}...`
// e representa el evento
    const manejarCambio = (e) => {
        props.setValor(e.target.value)
        //se usa props.setvalor para llamar al set valor del formulario y que este almacene los cambios
        //setValor registra un evento mediante "e" y va sumando al evento anterior para guardar los datos dentro de la funcion 
    }
 //   e.target.value se usa para obtener el valor unico de un input 
    return <div className="campo-texto">
        {/* <label>{props.title.toUpperCase()}</label> */}
        <TextField 
            placeholder={PlaceholderMod}
            required={props.required}
            // value={props.valor}
            label={props.title.toUpperCase()}
            onChange={manejarCambio}
            variant="outlined"
            fullWidth
            //onChange registra un cambio dentro del imput y llama a la funcion
        />
    </div>
}

export default CampoTexto;