import React from "react";
import Formulario from "./Formulario.jsx";
import Titulo from "./Titulo.jsx";

export default class App extends React.Component {

  render() {
    return (
      <div style={{ width: "60%", margin: "10px auto" }}>
        <Titulo />
        <Formulario
        />
      </div>
    );
  }
}
