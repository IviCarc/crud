import React from "react";
import Formulario from "./Formulario";
import Datos from "./Datos";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ricos : 0,
            cat1 : 0,
            cat2 : 0,
            cat3 : 0,
            cat4 : 0,
            cantidadHombres : 0,
            totalConsultas : 0
        }
    }

    actualizarDatos = (obj) => {
        let cat = "cat" + obj.categoria
        this.setState((state) => {
            return {
                ricos: state.ricos + (parseInt(obj.pago) > 100000 ? 1 : 0),
                [cat] : state[cat] + 1,
                cantidadHombres: state.cantidadHombres + (obj.genero === "hombre" ? 1 : 0),
                totalConsultas : state.totalConsultas + 1
            }
        })
    }

    render() {
        return ( <div>
            <Formulario actualizarDatos={this.actualizarDatos} mostrarDatos={this.state}/>
            {/* <Datos  mostrarDatos={this.state}/> */}
        </div>
        )
    }
}