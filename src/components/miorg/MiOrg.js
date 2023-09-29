// import { useState } from "react"
import "./miOrg.css"

//se llama props para importar la funcion 
const MiOrg = (props) => {
    // Estado - hooks
    //useState
    //const [nombreVariable, fucnionActuyaliza] = useState("Valor inicial")    
    // const [mostrar, actualizarMostrar] = useState(true)
    // const manejarClick = () => {
    //     actualizarMostrar(!mostrar)
    // }

    return <section className="orgSection">
        <h3 className="title">Mi organización</h3>
        <img src="/img/miOrg.png" alt="imd add" onClick={props.cambiarMostrar}></img>
        {/* se llama la funcion cuando se hace click con: props.nombreFuncion */}
    </section>
}

export default MiOrg