import React from "react";
import Formulario from "./Formulario";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mostrar: false,
      ricos: 0,
      cat1: 0,
      cat2: 0,
      cat3: 0,
      cat4: 0,
      cantidadHombres: 0,
      totalConsultas: 0,
    };

    this.mostrarDatos = this.mostrarDatos.bind(this);
  }

  actualizarDatos = (obj) => {
    let cat = "cat" + obj.categoria;
    this.setState((state) => {
      return {
        ricos: state.ricos + (parseInt(obj.pago) > 100000 ? 1 : 0),
        [cat]: state[cat] + 1,
        cantidadHombres:
          state.cantidadHombres + (obj.genero === "hombre" ? 1 : 0),
        totalConsultas: state.totalConsultas + 1,
      };
    });
  };

  mostrarDatos() {
    let state = this.state;
    return (
      <div>
        <p>
          Las personas que se interesaron por un auto de alto valor son: {state.ricos}
        </p>
        <p>Personas interesadas por un auto de categoría 1: {state.cat1}</p>
        <p>Personas interesadas por un auto de categoría 2: {state.cat2}</p>
        <p>Personas interesadas por un auto de categoría 3: {state.cat3}</p>
        <p>Personas interesadas por un auto de categoría 4: {state.cat4}</p>
        <p>
         Porcentaje de hombres respecto al total: %{(parseInt(state.cantidadHombres) * 100) / parseInt(state.totalConsultas)}
        </p>
      </div>
    );
  }
  1;
  render() {
    let state = this.state;
    return (
      <div style={{ width: "60%", margin: "10px auto" }}>
        <Formulario
          actualizarDatos={this.actualizarDatos}
          mostrarDatos={this.mostrarDatos}
        />
      </div>
    );
  }
}
