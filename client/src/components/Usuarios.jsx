import React from 'react';
import Usuario from './Usuario';
import { StyledH3 } from './StyledComponents';

const Usuarios = (props) => {
    return (
        <>
        <StyledH3>Usuarios existentes</StyledH3>
            {
            props.users.map((usr, i) => {
                return (
                    <Usuario 
                    cambiosInput={props.cambiosInput} 
                    editUser={props.editUser} 
                    deleteUser={props.deleteUser} 
                    usr={usr}
                    key={i}
                    />
                )
            })
            } 
        </>
    )
}

export default Usuarios;