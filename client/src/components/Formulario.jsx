// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import {Input, Select, Button} from "./componentesForm.jsx";

export default class Formulario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre : "",
      apellido : "",
      edad : "",
      genero : "hombre",
      contraseña : "",
    }

    this.enviar = this.enviar.bind(this);
    this.cambiosInput = this.cambiosInput.bind(this);
  }

  enviar(e, obj) {
    e.preventDefault();
    // let data = JSON.stringify(this.state)
    let url = "http://localhost:3000"

    fetch(url, {method:"POST", headers: {},body:JSON.stringify({"queonda":"aa"})})
      .then(res => res)
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }

  cambiosInput(e) {
    this.setState({
      [e.target.name] : e.target.value // Actualizo el state
    })
  }

  render () {
    return (
        <form className="container">

          <Input nombre="nombre" labelText="Nombre:" onChange={this.cambiosInput}/>

          <Input nombre="apellido" labelText="Apellido:" onChange={this.cambiosInput}/>

          <Input nombre="edad" labelText="Edad:" onChange={this.cambiosInput}/>

          <Select nombre="genero" labelText="Género:" opciones={["Hombre", "Mujer", "Otro"]} onChange={this.cambiosInput} defaultValue={this.state.genero}/>

          <Input nombre="contraseña" labelText="Contraseña:" onChange={this.cambiosInput}/>

          <Button className="btn btn-primary" text="Registrar usuario" onClick={this.enviar}/>

        </form>
    )
  }
  
}