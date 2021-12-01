// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import Usuarios from './Usuarios'
import axios from 'axios'
import NuevoUsuario from './NuevoUsuario.jsx';


export default class Formulario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre : { value: "", valid : null},
      apellido : { value: "", valid : null},
      edad : { value: 0, valid : null},
      genero : { value: "Hombre", valid : null},
      users:[]
    }
    
    this.url = "http://localhost:3000/api/users";
    
    this.editUser = this.editUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.getUsers = this.getUsers.bind(this);
    this.newUser = this.newUser.bind(this);
    this.cambiosInput = this.cambiosInput.bind(this);
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
    console.log(editData)
    this.getUsers();
  } 
  
  newUser = async (e) => {
    e.preventDefault();
    console.log(this.state.genero.value)
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
    console.log("FETCH" , res.data)
    this.setState({users:res.data});
  }
  
  cambiosInput = (e) => {
    this.setState({
      [e.target.name] : {value:e.target.value, valid:this.state[e.target.name].valid} // Actualizo el state sin alterar valid
    });
    console.log(e.target.name)
  }

  validar = (e) => {
    // if () {
    //   console.log("NICE");
    // }
  }
  
  render () {
    return (
      <form onSubmit={this.newUser}>

          <NuevoUsuario 
          cambiosInput={this.cambiosInput} 
          state={this.state}
          validar={this.validar}
          />

          <Usuarios 
          editUser={this.editUser} 
          deleteUser={this.deleteUser} 
          users={this.state.users}
          />
        </form>
    )
  }
  
}