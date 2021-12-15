import styled, { keyframes, css } from "styled-components";

const fadeIn = keyframes`
    0% {
    opacity: 0;
    }
    100% {
    opacity: 1;
    }
`;

const colores = {
	input_border: "#ccc",
	input_bkg: "#b3b3b330",
	error: "#bb2929",
	valido: "#1ed12d",
};

const StyledForm = styled.form`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr auto;
	gap: 10px;

	animation: 0.5s ${fadeIn} ease-out;

	@media only screen and (max-width: 600px) {
		grid-template-columns: 1fr;
	}
`;

const StyledH3 = styled.h3`
	display: block;
	grid-column: 1/6;
	margin: auto;
	@media only screen and (max-width: 600px) {
		grid-column: 1;
	}
`;

const StyledSelect = styled.select`
	font-size: 1em;
	font-family: system-ui;
	padding: 5px;
	border: 1px solid #ccc;
	border-radius: 3px;
	transition-duration: 0.15s;
	transition-property: border-color, box-shadow;
	transition-timing-function: ease-in-out, ease-in-out;
	cursor: pointer;
	background-color: ${(props) =>
		props.disabled ? colores.input_bkg : "#fff"};

	width: 100%;

	animation: 0.5s ${fadeIn} ease-out;

	&:focus {
		outline: 4px solid rgb(137, 193, 248, 0.7);
		box-shadow: 0px 0px 5px 2px rgb(206, 212, 218);
	}
	&:hover {
		opacity: 0.8;
	}
`;

const StyledInput = styled.input`
	font-size: 1em;
	font-family: system-ui;
	padding: 5px;
	border: 1px solid #ccc;
	border-radius: 3px;
	transition-duration: 0.15s;
	transition-property: border-color, box-shadow;
	transition-timing-function: ease-in-out, ease-in-out;
	background-color: ${(props) => (props.readOnly ? "#b3b3b330" : "none")};
	color: ${(props) => (props.readOnly ? "rgba(0,0,0,.5)" : "black")};
	width: 100%;

	${(props) =>
		props.valido === true &&
		props.readOnly === false &&
		css`
			outline: 3px solid green;
		`}

	${(props) =>
		props.valido === false &&
		props.readOnly === false &&
		css`
			outline: 3px solid ${colores.error};
		`}

    animation: .5s ${fadeIn} ease-out;

	&:focus {
		outline: 4px solid rgb(137, 193, 248, 0.7);
		box-shadow: 0px 0px 5px 2px rgb(206, 212, 218);
	}

	&::placeholder {
		color: black;
	}
`;

const StyledBtn = styled.button`
	border-radius: 5px;
	border: none;
	color: white;
	background-color: ${(props) => props.bkgColor || "#306fe4"};
	outline: none;
	cursor: pointer;
	padding: 10px;
	text-align: center;

	animation: 0.5s ${fadeIn} ease-out;

	&:hover {
		opacity: 0.8;
	}
`;

export { StyledInput, StyledSelect, StyledBtn, StyledForm, StyledH3 };
