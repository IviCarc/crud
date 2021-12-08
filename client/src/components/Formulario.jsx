import React from 'react';
import Usuarios from './Usuarios'
import axios from 'axios'
import NuevoUsuario from './NuevoUsuario.jsx';
import {StyledForm} from './StyledComponents';

export default class Formulario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre : { value: "", valid : null},
      apellido : { value: "", valid : null},
      edad : { value: 0, valid : null},
      genero : { value: "Hombre", valid : null},
      users:[],
    }
    
    this.url = "http://localhost:3000/api/users";
    
    this.editUser = this.editUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.getUsers = this.getUsers.bind(this);
    this.newUser = this.newUser.bind(this);
    this.cambiosInput = this.cambiosInput.bind(this);

    this.regex = {
      nombre : /^[a-zA-Z]{4,16}$/,
      apellido : /^[a-zA-Z]{4,16}$/,
      edad : /^[0-9]{2,2}$/
    }
  }

  async componentDidMount() {
    this.getUsers();
  }
  
  
  deleteUser = async (e, id) => {
    e.preventDefault();
    let url = this.url + "/" + id
    await axios.delete(url);
    this.getUsers();
  }
  
  editUser = async (e, usr) => {
    e.preventDefault();
    
    let editData = {
      "nombre":usr.nombre,
      "apellido":usr.apellido,
      "edad":usr.edad,
      "genero":usr.genero,
    }
    await axios.put(this.url + "/" + usr._id, editData);
    this.getUsers();
  } 
  
  newUser = async (e) => {
    e.preventDefault();

    // CHECK DATA
    for (const key in this.state) {
      if (!this.state[key].valid) {alert("Está ingresando mala data"); return}
    }

    await axios.post(this.url, {
      nombre : this.state.nombre.value,
      apellido : this.state.apellido.value,
      edad : parseInt(this.state.edad.value),
      genero : this.state.genero.value
    });
    this.getUsers();
  }
  
  getUsers = async () => {
    const res = await axios.get(this.url);
    this.setState({users:res.data});
  }
  
  cambiosInput = (e) => {
    this.setState({
      [e.target.name] : {...this.state[e.target.name], value:e.target.value} // Actualizo el state sin alterar valid
    });
  }

  validar = (e, regex) => {
    if (regex.test(e.target.value)) {
      this.setState({
        [e.target.name] : {...this.state[e.target.name], valid : true}
      });
    } else {
      this.setState({
        [e.target.name] : {...this.state[e.target.name], valid : false}
      });
    }
  }
  
  render () {
    return (
      <StyledForm onSubmit={this.newUser}>

          <NuevoUsuario 
          cambiosInput={this.cambiosInput} 
          state={this.state}
          validar={this.validar}
          regex = {this.regex}
          />

          <Usuarios 
          editUser={this.editUser} 
          deleteUser={this.deleteUser} 
          users={this.state.users}
          regex = {this.regex}
          />
        </StyledForm>
    )
  }
}