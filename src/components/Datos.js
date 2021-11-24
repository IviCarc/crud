// import './App.css';
import React from 'react';
// import Formulario from './Formulario';

export default class Datos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {clicked : false}
    }

    render () {
        let dato = this.props.mostrarDatos
        return (<div>
                <button className="btn btn-primary" onClick={e => {e.preventDefault();this.setState({clicked:true})}}>Mostrar datos</button>
                {
                    this.state.clicked &&
                    <div>
                        <p>Personas cuyo pago pretendido es mayor a $100.000: {dato.ricos}</p>
                        <p>Personas cuyo que eligieron la categoría 1:{dato.cat1}</p>
                        <p>Personas cuyo que eligieron la categoría 2:{dato.cat2}</p>
                        <p>Personas cuyo que eligieron la categoría 3:{dato.cat3}</p>
                        <p>Personas cuyo que eligieron la categoría 4:{dato.cat4}</p>
                        <p>Porcentaje de hombres respecto al total: {dato.cantidadHombres / dato.totalConsultas}</p>
                    </div>
                }
            </div>)
    }   
}

/*3)Una concesionaria de automóviles registra en una planilla los datos de las personas 
que vienen a preguntar por algún plan o para la compra de algún automóvil. Los 
vehículos los tiene divididos en cuatro categorías que están numeradas del 1 al 4, a 
saber: 1-sedan, 2-pickups, 3-standard, 4-superiores. Los datos que se le piden a los 
interesados son: Nombre y apellido, edad, género, estado civil, cantidad de hijos, 
categoría del vehículo que le interesa, importe que está dispuesto a pagar por un auto. 
El programa que la concesionaria necesita debe permitir cargar los datos necesarios 
para obtener los siguientes resultados: cantidad de personas que consultan y se 
interesan por un vehículo de un monto superior a los $ 100.000, cantidad de personas 
que optaron por cada categoría, porcentaje de hombres que hicieron consultas respecto 
al total.*/