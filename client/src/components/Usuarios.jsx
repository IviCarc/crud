import React from 'react'

const Usuarios = (props) => {
    return (
        <div className="m-1">
            { 
            props.users.map((usr, i) => {
                return (
                    <div key={i} className="d-flex justify-content-between gap-2
                    p-1">
                        <input type="text" readOnly value={usr.nombre} className="form-control"/>
                        <input type="text" readOnly value={usr.apellido} className="form-control"/>
                        <input type="text" readOnly value={usr.edad} className="form-control"/>
                        <input type="text" readOnly value={usr.genero} className="form-control"/>
                        <button className="btn btn-danger" onClick={(e) => props.deleteUser(e, usr._id)}>X</button>
                        <button className="btn btn-success" onClick={(e) => props.editUser(e, usr._id)}>X</button>
                    </div>
                )
                })
            } 
        </div>
    )
}

export default Usuarios;