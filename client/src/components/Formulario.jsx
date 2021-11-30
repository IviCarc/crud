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
      genero : { value: "", valid : null},
      users:[]
    }
    
    this.url = "http://localhost:3000/api/users";
    
    this.editUser = this.editUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.enviar = this.enviar.bind(this);
    this.cambiosInput = this.cambiosInput.bind(this);
  }

  async componentDidMount() {
    this.fetchData();
  }
  
  
  deleteUser = async (e, id) => {
    e.preventDefault();
    let url = this.url + "/" + id
    console.log(url)
    await axios.delete(url);
    this.fetchData();
  }
  
  editUser = async (e, id) => {
    e.preventDefault();
    this.fetchData();
  } 
  
  enviar = async (e) => {
    e.preventDefault();
    await axios.post(this.url, {
      nombre:this.state.nombre,
      apellido:this.state.apellido,
      edad:this.state.edad,
      genero:this.state.genero
    });
    this.fetchData();
  }
  
  fetchData = async () => {
    const res = await axios.get(this.url);
    console.log("FETCH" , res.data)
    this.setState({users:res.data});
  }
  
  cambiosInput = (e) => {
    this.setState({
      [e.target.name.value] : e.target.value // Actualizo el state
    });
  }

  validar = (e) => {
    if () {
      console.log("NICE");
    }
  }
  
  render () {
    return (
      <form onSubmit={this.enviar}>

          <NuevoUsuario 
            cambiosInput={this.cambiosInput} 
            state={this.state}
            validar={this.validar}
            />

          <Usuarios fetchData={this.fetchData} editUser={this.editUser} deleteUser={this.deleteUser} users={this.state.users}/>
        </form>
    )
  }
  
}