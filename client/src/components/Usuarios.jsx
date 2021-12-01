import React from 'react';
import Usuario from './Usuario';

const Usuarios = (props) => {
    return (
        <div className="m-1">
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
        </div>
    )
}

export default Usuarios;