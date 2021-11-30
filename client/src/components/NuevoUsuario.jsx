import React from "react";
import {Input, Select, Button} from './componentesForm';

const NuevoUsuario = (props) => {
    return (
        <div className="d-flex justify-content-between gap-2 m-1">
            <Input 
                nombre="nombre" 
                labelText="Nombre:" 
                onChange={props.cambiosInput} 
                validar={props.validar}
                regex = ""
                />

            <Input
                nombre="apellido"
                labelText="Apellido:"
                onChange={props.cambiosInput}
                validar = {props.validar}
                regex = ""
            />

            <Input 
                nombre="edad" 
                abelText="Edad:" 
                onChange={props.cambiosInput} 
                validar={props.validar}
                regex = ""
            />

            <Select
                nombre="genero"
                labelText="Género:"
                opciones={["Hombre", "Mujer", "Otro"]}
                onChange={props.cambiosInput}
                defaultValue={props.state.genero}
                validar = {props.validar}
            />

            <Button className="btn btn-primary" text="Registrar" />
        </div>
    );
};

export default NuevoUsuario;