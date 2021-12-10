import React from "react";
import {
	StyledInput,
	StyledSelect,
	StyledBtn,
	StyledH3,
} from "./StyledComponents";

const NuevoUsuario = (props) => {
	return (
		<>
			<StyledH3>Crear nuevo usuario</StyledH3>

			<StyledInput
				type='text'
				name='nombre'
				placeholder='Nombre'
				onChange={props.cambiosInput}
				autoComplete='off'
				onKeyUp={(e) => props.validar(e, props.regex.nombre)}
				onBlur={(e) => props.validar(e, props.regex.nombre)}
				required
				valido={props.state.nombre.valid}
			></StyledInput>

			<StyledInput
				type='text'
				placeholder='Apellido'
				name='apellido'
				onChange={props.cambiosInput}
				autoComplete='off'
				onKeyUp={(e) => props.validar(e, props.regex.apellido)}
				onBlur={(e) => props.validar(e, props.regex.apellido)}
				required
				valido={props.state.apellido.valid}
			></StyledInput>

			<StyledInput
				type='text'
				placeholder='Edad'
				name='edad'
				onChange={props.cambiosInput}
				autoComplete='off'
				onKeyUp={(e) => props.validar(e, props.regex.edad)}
				onBlur={(e) => props.validar(e, props.regex.edad)}
				required
				valido={props.state.edad.valid}
			></StyledInput>

			<StyledSelect
				name='genero'
				onChange={(e) => {
					props.cambiosInput(e);
					props.validar(e, props.regex.genero);
				}}
				value={props.state.genero.value}
				required
				validar={props.validar}
				onKeyUp={(e) => props.validar(e, props.regex.genero)}
				onBlur={(e) => props.validar(e, props.regex.genero)}
			>
				<option value='hombre'>Hombre</option>
				<option value='mujer'>Mujer</option>
				<option value='otro'>Otro</option>
			</StyledSelect>

			<StyledBtn>Registrar</StyledBtn>
		</>
	);
};

export default NuevoUsuario;
