import "./boton.css"

const Boton = (props) => {
    return <button className="btn">{props.children}</button>
}

export default Boton;