import React, {useState} from "react";
import axios from 'axios';

const Usuario = (props) => {
    const [readOnly, setReadOnly] = useState(true);
    const [onChange, setOnChange] = useState(false);

    const [state, setState] = useState({
        nombre : { value: props.usr.nombre, valid : null},
        apellido : { value: props.usr.apellido, valid : null},
        edad : { value: props.usr.edad, valid : null},
        genero : { value: props.usr.genero, valid : null}
    })

    const cambiosInput = (e) => {
        setState( prevState => {
            return {...prevState, [e.target.name] : {value:e.target.value, valid: state[e.target.name].valid}}
            }
        );
      }

    const edit = async (e, id) => {
        e.preventDefault();
        if (!readOnly) {
            let editedData = {
                nombre : state.nombre.value,
                apellido : state.apellido.value,
                edad : state.edad.value,
                genero : state.genero.value
            }
            await axios.put('http://localhost:3000/api/users/' + id, editedData);
        } 
        
        setReadOnly(!readOnly); 
        setOnChange(!onChange)
        
    }

    return (
        <div className="d-flex justify-content-between gap-2
                    p-1">
            <input 
            name="nombre" 
            type="text" 
            readOnly={readOnly} 
            onChange={cambiosInput} 
            defaultValue={props.usr.nombre} 
            className="form-control"/>

            <input 
            name="apellido" 
            type="text" 
            readOnly={readOnly} 
            onChange={cambiosInput} 
            defaultValue={props.usr.apellido} 
            className="form-control"/>

            <input 
            name="edad" 
            type="text" 
            readOnly={readOnly} 
            onChange={cambiosInput} 
            defaultValue={props.usr.edad} 
            className="form-control"/>

            <select 
            name="genero" 
            disabled={readOnly} 
            onChange={cambiosInput} 
            defaultValue={props.usr.genero}  
            className="form-control">
                <option value="Hombre">Hombre</option>
                <option value="Mujer">Mujer</option>
                <option value="Otro">Otro</option>
            </select>

            <button className="btn btn-danger" 
                onClick= {(e) => props.deleteUser(e, props.usr._id) } > X </button>
            <button className="btn btn-success" 
                onClick={ (e) => { edit(e, props.usr._id)} } >X</button>
        </div>
    )
}

export default Usuario;