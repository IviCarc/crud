// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import Datos from './Datos';
// import Datos from "./Datos"

function Input(props) {
  return <div>
    <label htmlFor={props.nombre}>{props.labelText}</label>
    <input className="form-control" type="text" name={props.nombre} placeholder={props.nombre} />
  </div>
}

function Select(props) {
  return <div>
    {/* value={this.state.categoria}  AGREGA ESTO BOLUDO  Y EL ONCHANGE EN TODOS*/}
    <label htmlFor={props.nombre}>{props.labelText}</label>
      <select className="form-control" name={props.nombre}>
        {props.opciones.map(opt => { return <option value={opt}> {opt} </option> })}
      </select>
  </div>
}

class Formulario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
      <div style={{width:"60%", margin:"10px auto"}}>
        <form className="">

          <Input nombre="nombre" labelText="Ingrese su nombre"/>

          <Input nombre="apellido" labelText="Ingrese su apellido"/>

          <Input nombre="edad" labelText="Ingrese su edad"/>

          <Select nombre="genero" labelText="Inserte su género" opciones={["Hombre", "Mujer", "Otro"]}/>

          <Select nombre="estadoCivil" labelText="Inserte su estado civil" opciones={["Soltero", "Casado"]}/>

          <Input nombre="hijos" labelText="Ingrese cuántos hijos tiene"/>

          <Select nombre="categoria" labelText="Seleccione la categoria del auto" opciones={["1", "2", "3", "4"]}/>

          {/* <div>
            <label htmlFor="genero">Inserte su genero</label>
            <select className="form-control" name="genero" value={this.state.genero} onChange={this.cambiosInput}>
              <option value="hombre">Hombre</option>
              <option value="mujer">Mujer</option>
              <option value="otro">Otro</option>
            </select>
          </div>*/}

          <button onClick={this.enviar} className="btn btn-primary">Cargar datos</button>
          <Datos mostrarDatos={this.props.mostrarDatos}/>
        </form>
      </div>
    )
  }
  
}


export default Formulario;
