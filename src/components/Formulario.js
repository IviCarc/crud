// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import {Input, Select, Button} from "./componentesForm";

export default class Formulario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mostrarDatos: false,
      clicked : false,
      nombre : "",
      apellido : "",
      edad : "",
      genero : "hombre",
      estadoCivil: "soltero",
      hijos : "",
      categoria : "1",
      pago : ""
    }

    this.enviar = this.enviar.bind(this);
    this.cambiosInput = this.cambiosInput.bind(this);
  }

  enviar(e, obj) {
    e.preventDefault();
    this.setState({clicked : true});
    this.props.actualizarDatos(this.state);
  }

  cambiosInput(e) {
    this.setState({
      [e.target.name] : e.target.value // Actualizo el state
    })
  }

  render () {
    return (
        <form className="">

          <Input nombre="nombre" labelText="Ingrese su nombre" onChange={this.cambiosInput}/>

          <Input nombre="apellido" labelText="Ingrese su apellido" onChange={this.cambiosInput}/>

          <Input nombre="edad" labelText="Ingrese su edad" onChange={this.cambiosInput}/>

          <Select nombre="genero" labelText="Inserte su género" opciones={["Hombre", "Mujer", "Otro"]} onChange={this.cambiosInput} defaultValue={this.state.genero}/>

          <Select nombre="estadoCivil" labelText="Inserte su estado civil" opciones={["Soltero", "Casado"]} onChange={this.cambiosInput} defaultValue={this.state.estadoCivil}/>

          <Input nombre="hijos" labelText="Ingrese cuántos hijos tiene" onChange={this.cambiosInput}/>

          <Select nombre="categoria" labelText="Seleccione la categoria del auto" opciones={["1", "2", "3", "4"]} onChange={this.cambiosInput} defaultValue={this.state.categoria}/>

          <Input nombre="pago" labelText="Ingrese el monto dispuesto a pagar" onChange={this.cambiosInput}/>

          {
            this.state.mostrarDatos &&
            this.props.mostrarDatos()
          }

          <div className="container-fluid text-center">
          <Button onClick={this.enviar} text="Cargar datos" className="btn btn-primary" style={{margin:"10px"}}/>

          {
            this.state.clicked  && 
            <Button onClick={(e) => {
              e.preventDefault();
              this.setState({mostrarDatos:true});
            }} 
              text="Mostrar datos" className="btn btn-primary" style={{margin:"10px"}}/>
          }
          </div>
        </form>
    )
  }
  
}