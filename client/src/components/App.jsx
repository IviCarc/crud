import React from "react";
import Formulario from "./Formulario.jsx";

export default class App extends React.Component {
  render() {
    return (
      <div style={{ width: "80%", margin: "10px auto", maxWidth:"1000px"}}>
        <div>
          <h1 style={{textAlign:"center"}}>CRUD</h1>
        </div>
        <Formulario/>
      </div>
    );
  }
}