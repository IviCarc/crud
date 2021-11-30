import React from "react";
import {Input, Select, Button} from './componentesForm';

const NuevoUsuario = (props) => {
    return (
        <div className="d-flex justify-content-between gap-2 m-1">
            <Input nombre="nombre" labelText="Nombre:" onChange={props.cambiosInput} />

            <Input
                nombre="apellido"
                labelText="Apellido:"
                onChange={props.cambiosInput}
            />

            <Input nombre="edad" labelText="Edad:" onChange={props.cambiosInput} />

            <Select
                nombre="genero"
                labelText="Género:"
                opciones={["Hombre", "Mujer", "Otro"]}
                onChange={props.cambiosInput}
                defaultValue={props.state.genero}
            />

            <Button className="btn btn-primary" text="Registrar" />
        </div>
    );
};

export default NuevoUsuario;