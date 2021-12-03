import React, {useState} from "react";

const NuevoUsuario = (props) => {

    const [nameClass, setNameClass] = useState(null)
    const [nameClass, setNameClass] = useState(null)
    const [nameClass, setNameClass] = useState(null)

    let inputClass = "form-control";

    if (props.state.nombre.valid == null) {
        console.log("NULL")
    } else if (props.state.nombre.valid == true) { 
        inputClass += " is-valid"
    } else {
        inputClass += " is-invalid"
    }

    return (
        <div className="d-flex justify-content-between gap-2 m-1">
            <div className="form-group">
            <input
            className={inputClass}
            type="text"
            name="nombre"
            placeholder="Nombre"
            onChange={props.cambiosInput}
            autoComplete="off"
            onKeyUp={(e) => props.validar(e, props.regex.nombre)}
            onBlur={(e) => props.validar(e, props.regex.nombre)}
            required
            />
            </div>

            <div className="form-group">
            <input
            className={inputClass}
            type="text"
            name="apellido"
            placeholder="Apellido"
            onChange={props.cambiosInput}
            autoComplete="off"
            onKeyUp={(e) => props.validar(e, props.regex.apellido)}
            onBlur={(e) => props.validar(e, props.regex.apellido)}
            required
            />

            </div>

            <div className="form-group has-error">
                
            <input
            className="form-control "
            type="text"
            name="edad"
            placeholder="Edad"
            onChange={props.cambiosInput}
            autoComplete="off"
            onKeyUp={(e) => props.validar(e, props.regex.edad)}
            onBlur={(e) => props.validar(e, props.regex.edad)}
            required
            />
            </div>


            <div className="form-group has-error">  
            <select
            className="form-control"
            name={"genero"}
            onChange={props.cambiosInput}
            value={props.state.genero.value}
            required
            >
                <option value="Hombre">Hombre</option>
                <option value="Mujer">Mujer</option>
                <option value="Otro">Otro</option>
            </select>
                
            </div>


            <button
            onClick={props.onClick}
            className="btn btn-primary"
            >
                Registrar
            </button>
        </div>
    );
};

export default NuevoUsuario;