// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Datos from "./Datos"

class Formulario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre : "",
      apellido : "",
      edad : "",
      genero : "hombre",
      estadoCivil: "soltero",
      hijos : "",
      categoria : "1",
      pago : ""
    }

    this.enviar = this.enviar.bind(this)
    this.cambiosInput = this.cambiosInput.bind(this)
  }

  enviar(e) {
    e.preventDefault();
  }

  cambiosInput(e) {
    this.setState({
      [e.target.name] : e.target.value // Actualizo el state
    })
  }

  render () {
    console.log(this.props.func)
    return (
      <div>
        <form >
          <div>
            <label htmlFor="nombre">Inserte su nombre</label>
            <input type="text" name="nombre" placeholder="Nombre" onChange={this.cambiosInput}/>
          </div>

          <div>
            <label htmlFor="apellido">Inserte su apellido</label>
            <input type="text" name="apellido" placeholder="Apellido" onChange={this.cambiosInput}/>
          </div>

          <div>
            <label htmlFor="edad">Inserte su edad</label>
            <input type="text" name="edad" placeholder="Edad" onChange={this.cambiosInput}/>
          </div>

          <div>
            <label htmlFor="genero">Inserte su genero</label>
            <select name="genero" value={this.state.genero} onChange={this.cambiosInput}>
              <option value="hombre">Hombre</option>
              <option value="mujer">Mujer</option>
              <option value="otro">Otro</option>
            </select>
          </div>

          <div>
            <label htmlFor="estadoCivil">Inserte su estado civil</label>
            <select name="estadoCivil" value={this.state.estadoCivil} onChange={this.cambiosInput}>
              <option value="soltero">Soltero</option>
              <option value="casado">Casado</option>
            </select>
          </div>

          <div>
            <label htmlFor="hijos">Ingrese cuantos hijos tiene</label>
            <input type="text" name="hijos" placeholder="Cant hijos" onChange={this.cambiosInput}/>
          </div>

          <div>
            <label htmlFor="categoria">Seleccione la categoria del auto</label>
            <select name="categoria" value={this.state.categoria} onChange={this.cambiosInput}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>

          <div>
            <label htmlFor="pago">Inserte el monto dispuesto a pagar</label>
            <input type="text" name="pago" placeholder="Pago pretendido" onChange={this.cambiosInput}/>
          </div>

          <button onClick={this.enviar}>Cargar datos</button>
        </form>
      </div>
    )
  }

}


export default Formulario;
