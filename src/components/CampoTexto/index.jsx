import "./texto.css"

const Texto = (props) => {  
    
    
    
    const {type = "text"} = props

    

    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label> {/*titulo lo ponemos en formulario.js toUpperCase() para poner en mayuscula */}
        <input
            placeholder={props.placeholder}
            required={props.required}
            value={props.valor}
            
            
            type={type}
        /> 
    </div>
}

export default Texto