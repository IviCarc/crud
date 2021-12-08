import React, {useState} from "react";
import axios from 'axios';
import { StyledInput, StyledBtn, StyledSelect } from "./StyledComponents";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'

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
        <React.Fragment>

            <StyledInput
            name="nombre" 
            type="text" 
            readOnly={readOnly} 
            onChange={cambiosInput} 
            defaultValue={props.usr.nombre} 
            >
            </StyledInput>


            <StyledInput 
            name="apellido" 
            type="text" 
            readOnly={readOnly} 
            onChange={cambiosInput} 
            defaultValue={props.usr.apellido} 
            />

            <StyledInput 
            name="edad" 
            type="text" 
            readOnly={readOnly} 
            onChange={cambiosInput} 
            defaultValue={props.usr.edad} 
            />

            <StyledSelect 
            name="genero" 
            disabled={readOnly} 
            onChange={cambiosInput} 
            defaultValue={props.usr.genero}  
            >
                <option value="Hombre">Hombre</option>
                <option value="Mujer">Mujer</option>
                <option value="Otro">Otro</option>
            </StyledSelect>

            <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-around"}}>
            <StyledBtn
                bkgColor="#f14729" onClick= {(e) => props.deleteUser(e, props.usr._id) } > 
                    <FontAwesomeIcon icon={faTrash} /> 
                </StyledBtn>
            <StyledBtn
                bkgColor="#3bbe2ace" onClick={ (e) => { edit(e, props.usr._id)} } > 
                    <FontAwesomeIcon icon={faEdit} />
                </StyledBtn>
            </div>
            
        </React.Fragment>
    )
}

export default Usuario;