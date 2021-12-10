import React, { useState } from "react";
import axios from "axios";
import { StyledInput, StyledBtn, StyledSelect } from "./StyledComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

const Usuario = (props) => {
	const [readOnly, setReadOnly] = useState(true);
	const [onChange, setOnChange] = useState(false);

	const [state, setState] = useState({
		nombre: { value: props.usr.nombre, valid: null },
		apellido: { value: props.usr.apellido, valid: null },
		edad: { value: props.usr.edad, valid: null },
		genero: { value: props.usr.genero, valid: null },
	});

	const cambiosInput = (e) => {
		setState({
			...state,
			[e.target.name]: { ...state[e.target.name], value: e.target.value },
		});
	};

	const edit = async (e, id) => {
		e.preventDefault();
		if (!readOnly) {
			for (const key in state) {
				if (state[key].valid === false) {
					return;
				}
			}
			let editedData = {
				nombre: state.nombre.value,
				apellido: state.apellido.value,
				edad: state.edad.value,
				genero: state.genero.value,
			};
			await axios.put(
				"http://localhost:3000/api/users/" + id,
				editedData
			);
		}

		setReadOnly(!readOnly);
		setOnChange(!onChange);
	};

	const validar = (e, regex) => {
		if (regex.test(e.target.value)) {
			setState({
				...state,
				[e.target.name]: { ...state[e.target.name], valid: true },
			});
		} else {
			setState({
				...state,
				[e.target.name]: { ...state[e.target.name], valid: false },
			});
		}
	};

	return (
		<React.Fragment>
			<StyledInput
				name='nombre'
				type='text'
				readOnly={readOnly}
				onChange={cambiosInput}
				defaultValue={props.usr.nombre}
				onKeyUp={(e) => validar(e, props.regex.nombre)}
				onBlur={(e) => validar(e, props.regex.nombre)}
				valido={state.nombre.valid}
			></StyledInput>

			<StyledInput
				name='apellido'
				type='text'
				readOnly={readOnly}
				onChange={cambiosInput}
				defaultValue={props.usr.apellido}
				onKeyUp={(e) => validar(e, props.regex.apellido)}
				onBlur={(e) => validar(e, props.regex.apellido)}
				valido={state.apellido.valid}
			/>

			<StyledInput
				name='edad'
				type='text'
				readOnly={readOnly}
				onChange={cambiosInput}
				defaultValue={props.usr.edad}
				onKeyUp={(e) => validar(e, props.regex.edad)}
				onBlur={(e) => validar(e, props.regex.edad)}
				valido={state.edad.valid}
			/>

			<StyledSelect
				name='genero'
				disabled={readOnly}
				onChange={cambiosInput}
				defaultValue={props.usr.genero}
				onKeyUp={(e) => validar(e, props.regex.genero)}
				onBlur={(e) => validar(e, props.regex.genero)}
				valido={state.genero.valid}
			>
				<option value='hombre'>Hombre</option>
				<option value='mujer'>Mujer</option>
				<option value='otro'>Otro</option>
			</StyledSelect>

			<div
				style={{
					display: "flex",
					flexWrap: "wrap",
					justifyContent: "space-around",
				}}
			>
				<StyledBtn
					bkgColor='#f14729'
					onClick={(e) => props.deleteUser(e, props.usr._id)}
				>
					<FontAwesomeIcon icon={faTrash} />
				</StyledBtn>
				<StyledBtn
					bkgColor='#3bbe2ace'
					onClick={(e) => {
						edit(e, props.usr._id);
					}}
				>
					<FontAwesomeIcon icon={faEdit} />
				</StyledBtn>
			</div>
		</React.Fragment>
	);
};

export default Usuario;
